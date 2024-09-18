import type { HttpContext } from '@adonisjs/core/http'
import { postHighBreedClaimValidator } from '#validators/post_claim'
import NAV from '../nav.js'
import { ISalesHeader, ISalesLine } from '../interfaces/ISalesLine.js'
import ClaimsController from '#controllers/claims_controller'
import ClaimChecker from '../Checkers/ClaimChecker.js'
import { IMember } from '../interfaces/IMember.js'
import { ICimasClaim } from '../interfaces/IClaim.js'
import CimasProcessor from '../processors/cimas_processor.js'
import { IHeader } from '../interfaces/IHeader.js'
import http from '../http.js'
import JSONProcessor from '../processors/JSONProcessor.js'

export default class HighBreedClaimsController {
  claim = new ClaimsController()
  claimChecker = new ClaimChecker()
  async getSalesLines(header: IHeader) {
    const { data } = await NAV.get(
      `/SalesInvoiceLineEP?$filter=Episode_ID eq '${header.EpisodeNo}'`
    )

    const diagnosis =
      header.ICD10.length === 0
        ? []
        : [
          {
            Code: header.ICD10,
          },
        ]

    const Sales: ISalesLine[] = data.value.map((x: any) => {
      return <ISalesLine>{
        No: x.No,
        TariffCode: x.Tarrif_Code,
        NappiCode: x.Nappi_Code,
        GroupDescription: x.Group_Description,
        Description: x.Description,
        EpisodeID: x.Episode_ID,
        Type: x.Type,
        Quantity: (x.Quantity - x.Credited_Qty_FF) * 100,
        Amount: Math.round((x.Amount - x.Credited_Amount_FF) * 100),
        UnitPrice: x.Unit_Price,
        PostingDate: x.Posting_Date,
        DischargeDate: header.DischargeDate,
        AdmissionDate: header.AdmissionDate,
        Diagnosis: diagnosis,
      }
    })

    const AvailableSales = Sales.filter((x) => x.Quantity > 0)

    return this.getUnitProducts(AvailableSales)
  }

  getTotalItem(productList: any) {
    let totalConsumables = 0
    let totalServices = productList.length

    for (let s of productList) {
      totalConsumables += s.SalesLine.length
    }

    return {
      totalServices,
      totalConsumables,
      productList,
    }
  }

  getUnitProducts(products: ISalesLine[]) {
    const tempProducts: ISalesHeader[] = []
    const productIDs: string[] = []
    let z = 1
    for (let product of products) {
      if (!productIDs.includes(product.TariffCode)) {
        productIDs.push(product.TariffCode)
        tempProducts.push({
          Number: z,
          No: product.No,
          TariffCode: product.TariffCode,
          GroupDescription: product.GroupDescription,
          Type: product.Type,
          Amount: product.Amount,
          Quantity: product.Quantity,
          EpisodeID: product.EpisodeID,
          AdmissionDate: product.AdmissionDate,
          DischargeDate: product.DischargeDate,
          NoOfConsumables: 0,
          SalesLine: product.NappiCode.length > 0 ? [product] : [],
          Diagnosis: product.Diagnosis,
        })
        z++
      } else {
        const tempProduct = tempProducts.find(
          (x: ISalesHeader) => x.TariffCode === product.TariffCode
        )
        if (tempProduct) {
          tempProduct.Quantity += product.Quantity
          tempProduct.Amount += product.Amount
          this.updateProductList(tempProduct.SalesLine, product)
        }
      }
    }

    const productList = tempProducts.map((x) => {
      x.NoOfConsumables = x.SalesLine.length
      return x
    })

    return this.getTotalItem(productList)
  }

  updateProductList(products: ISalesLine[], product: ISalesLine) {
    const isFound = products.find((x) => x.No === product.No)
    if (isFound) {
      isFound.Quantity += product.Quantity
      isFound.Amount += product.Amount
    } else {
      if (product.NappiCode.length > 0) {
        products.push(product)
      }
    }
  }

  async post({ request, response }: HttpContext) {
    try {
      const bodyX = request.all()
      const { ClaimNo, Type } = await postHighBreedClaimValidator.validate(bodyX)
      const header = await this.claim.getClaim(ClaimNo, Type)
      const checkedHeader = this.claimChecker.checkHeader(header, response)

      const salesLines = await this.getSalesLines(checkedHeader)
      const patient = await this.claim.getPatient(checkedHeader.PatientNo, checkedHeader.FunderCode)
      const checkedPatient = this.claim.claimChecker.checkPatient(patient, response)

      const member: IMember = {
        MedicalSchemeNumber: checkedPatient.MedicalAidNo,
        MedicalSchemeName: checkedPatient.Funder,
      }

      checkedHeader.TotalServices = salesLines.productList.length ?? 0
      checkedHeader.TotalConsumables = salesLines.totalConsumables ?? 0

      const claimData: ICimasClaim = {
        header: checkedHeader,
        member: member,
        patient: checkedPatient,
        products: salesLines.productList,
      }

      const body = new CimasProcessor().Claim(claimData)
      const { data } = await http.post(`/apacewebservices/ZMF?wsdl`, body)
      console.log(data)

      const x = new JSONProcessor()

      const z = await x.ClaimProcessor(data)
      return this.claim.GetClaimResponse(z)
    } catch (e) {
      response.abort({
        msg: e?.body?.msg ?? 'Server Error',
      })
    }
  }
}
