import type { HttpContext } from '@adonisjs/core/http'
import { postClaimValidator } from '#validators/post_claim'
import NAV from '../nav.js'
import { IPatient } from '../interfaces/IPatient.js'
import { IPersonal } from '../interfaces/IPersonal.js'
import { IHeader } from '../interfaces/IHeader.js'

import { IProduct } from '../interfaces/IProduct.js'
import ClaimChecker from '../Checkers/ClaimChecker.js'
import moment from 'moment'
import { IClaim } from '../interfaces/IClaim.js'
import { IMember } from '../interfaces/IMember.js'
import ClaimProcessor from '../processors/claim_processor.js'
import http from '../http.js'
import JSONProcessor from '../processors/JSONProcessor.js'

export default class ClaimsController {
  //yyyy-mm-dd

  claimChecker = new ClaimChecker()
  async getClaim(No: string, Type: string): Promise<IHeader | null> {
    try {
      const { data } = await NAV.get(`/MedicalAidClaimList('${No}')`)

      const header: IHeader = {
        No: data.Claim_No,
        PatientNo: data.Patient_No,
        EpisodeNo: data.Episode_ID,
        TransactionNo: moment().format('MMDDYYYYHHmmss'),
        AdmissionDate: data.Admission_Date,
        DischargeDate: data.Discharge_Date,
        AdmissionTime: data.Admission_Time,
        DischargeTime: data.Discharge_Time,
        TotalConsumables: 0, //data.Total_Consumables,
        TotalServices: 0,
        Type: Type,
        ClaimDate: moment().format('YYYYMMDDHHmmss'),
        AuthorisedDate: moment().format('YYYYMMDD'),
        GrossAmount: data.Gross_Amount * 100,
        ICD10: data.ICD10_Code,
        AuthorisationNumber: data.Auth_Value,
        FunderCode: data.Funder_Code,
        PreAuthorisationNumber: data.Pre_Authorisation_No.trim(),
      }
      return header
    } catch (e) {
      console.log(e)
      return null
    }
  }

  async getClaimLines(header: IHeader) {
    try {
      const { data } = await NAV.get(
        `/MedicalAidClaimLineList?$filter=Document_Claim_No eq '${header.No}'`
      )
      console.log(data.value)
      const products: IProduct[] = []

      const diagnosis =
        header.ICD10.length === 0
          ? []
          : [
              {
                Code: header.ICD10,
              },
            ]

      for (let i = 0; i < data.value.length; i++) {
        const x = data.value[i]
        products.push({
          Number: x.Claim_Line_No ?? '',
          Description: x.Description_Tariff ?? 'Other Desc',
          Qty: +x.Quantity * 100,
          Price: Math.round(+x.Fee_Amount * 100),
          TariffCode: x.Tariff_Code ?? '',
          type: x.Type ?? '',
          AdmissionDate: header.AdmissionDate ?? '',
          DischargeDate: header.DischargeDate ?? '',
          Diagnosis: diagnosis,
        })
      }

      return products
    } catch (e) {
      console.log(e)
      return []
    }
  }

  async getPatient(No: string, Funder: string): Promise<IPatient | null> {
    try {
      const { data } = await NAV.get(`/api_patient_list('${No}')`)
      const patient: IPatient = {
        DependantCode: data.Patient_Suffix ?? '',
        NewBornIndicator: 'N',
        Funder: Funder,
        MedicalAidNo: data.Medical_Aid_Member_No,
        personal: <IPersonal>{
          DateOfBirth: data.Date_of_Birth ?? '',
          FirstName: data.Name ?? '',
          Gender: data.Gender[0] ?? '',
          Initials: data.Name[0] ?? '',
          Surname: data.Surname ?? '',
          Title: data.Title ?? '',
        },
      }
      return patient
    } catch (e) {
      return null
    }
  }

  async post({ request, response }: HttpContext) {
    const dataX = request.all()

    const { No, Type } = await postClaimValidator.validate(dataX)
    const header = await this.getClaim(No, Type)

    const checkedHeader = this.claimChecker.checkHeader(header, response)

    const patient = await this.getPatient(checkedHeader.PatientNo, checkedHeader.FunderCode)
    const checkedPatient = this.claimChecker.checkPatient(patient, response)

    const lines = await this.getClaimLines(checkedHeader)

    const member: IMember = {
      MedicalSchemeNumber: checkedPatient.MedicalAidNo,
      MedicalSchemeName: checkedPatient.Funder,
    }

    checkedHeader.TotalServices = lines.length

    const claimData: IClaim = {
      header: checkedHeader,
      member: member,
      patient: checkedPatient,
      products: lines,
    }

    const body = new ClaimProcessor().Claim(claimData)
    const { data } = await http.post(`/apacewebservices/ZMF?wsdl`, body)
    const x = new JSONProcessor()
    const z = await x.ClaimProcessor(data)

    return this.GetClaimResponse(z)
  }

  GetClaimResponse(res: any) {
    const Transaction = res.Claim.Response.ClaimHeaderResponse
    const Services = res.Claim.Response.ServiceResponse
    return {
      ResponseCode: Transaction.ResponseCode,
      Message: this.GetMessage(Transaction.Message),
      Services: this.GetServices(Services),
    }
  }

  GetMessage(payload: any): string {
    let Msg = ''
    if (payload === undefined || payload === null) {
      Msg = 'Transaction Failed'
    }

    if (!Array.isArray(payload)) {
      Msg = payload.Description
    }

    if (Array.isArray(payload)) {
      let x: string[] = []

      for (const element of payload) {
        x.push(element.Description)
      }

      Msg = x.join('. ')
    }

    return Msg
  }

  GetServices(payload: any) {
    let Service = []
    if (payload === undefined || payload === null) {
      Service = []
    }

    if (!Array.isArray(payload)) {
      Service.push({
        Number: payload?.Number,
        GrossAmount: payload?.SubTotalValues?.GrossAmount ?? 0,
        NettAmount: payload?.SubTotalValues?.NettAmount ?? 0,
        PatientPayAmount: payload?.SubTotalValues?.PatientPayAmount ?? 0,
        Message: this.setServiceMessage(payload?.Message) ?? '',
      })
    }

    if (Array.isArray(payload)) {
      let x = []

      for (const element of payload) {
        x.push({
          Number: element?.Number,
          GrossAmount: element?.SubTotalValues?.GrossAmount ?? 0,
          NettAmount: element?.SubTotalValues?.NettAmount ?? 0,
          PatientPayAmount: element?.SubTotalValues?.PatientPayAmount ?? 0,
          Message: this.setServiceMessage(element.Message) ?? '',
        })
      }

      Service = x
    }

    return Service
  }

  setServiceMessage(res: any) {
    let msg = ''

    if (!Array.isArray(res)) {
      msg = res?.Description ?? ''
    }

    if (Array.isArray(res)) {
      let x = []

      for (const element of res) {
        x.push(element?.Description ?? '')
      }

      msg = x.toString()
    }

    return msg
  }
}
