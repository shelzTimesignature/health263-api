import { IClaim } from '../interfaces/IClaim.js'
import { IMember } from '../interfaces/IMember.js'
import { IPersonal } from '../interfaces/IPersonal.js'
import { IPatient } from '../interfaces/IPatient.js'
import { IDiagnosis } from '../interfaces/IDiagnosis.js'
import { IHeader } from '../interfaces/IHeader.js'
import { IProduct } from '../interfaces/IProduct.js'

export default class ClaimProcessor {
  Claim(claim: IClaim) {
    return `
      <x:Envelope
    xmlns:x="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:apa="http://apace.systems/apacewebservices/"
    xmlns:zmf="http://zieto.co.za/claim/zmf"
  >
    <x:Header>
      <apa:secureToken>${process.env.secureToken}</apa:secureToken>
    </x:Header>
    <x:Body>
      <apa:processZMF>
        <apa:ZMF2_1Request>
          <zmf:Claim>
            <zmf:Request>
              ${this.Transaction(claim)}
              ${this.Provider()}
              ${this.Member(claim.member)}
              ${this.Patient(claim.patient)}
              ${this.Header(claim.header)}
              ${this.Services(claim.products, claim.header)}
            </zmf:Request>
          </zmf:Claim>
        </apa:ZMF2_1Request>
      </apa:processZMF>
    </x:Body>
  </x:Envelope>
    `

    //${this.Consumables(claim.products.filter((x) => x.type === 'Item'))}
  }
  DiagnosisArray(diagnosis: IDiagnosis[]) {
    return diagnosis.map((x: IDiagnosis) => this.Diagnosis(x)).join('\n')
  }

  Diagnosis(diagnosis: IDiagnosis) {
    return `
      <zmf:Diagnosis>
        <zmf:Stage>P</zmf:Stage>
        <zmf:CodeSet>ICD</zmf:CodeSet>
        <zmf:Code>${diagnosis.Code}</zmf:Code>
      </zmf:Diagnosis>
    `
  }

  Authorisation(header: IHeader) {
    return `
      <zmf:Authorisation>
        <zmf:PreAuthorisationNumber>${header.PreAuthorisationNumber}</zmf:PreAuthorisationNumber>
        <zmf:AuthorisationNumber>${header.AuthorisationNumber}</zmf:AuthorisationNumber>
        <zmf:AuthorisationDate>${header.ClaimDate.substring(0, 8)}</zmf:AuthorisationDate>
      </zmf:Authorisation>
    `
  }

  Services(products: IProduct[], header: IHeader) {
    return products.map((x) => this.Service(x, header)).join('\n')
  }

  Service(product: IProduct, header: IHeader) {
    return `
         <zmf:Service>
              <zmf:Type>T</zmf:Type>
              <zmf:Number>${product.Number}</zmf:Number>
              <zmf:CodeSet>Other</zmf:CodeSet>
              <zmf:Code>${product.TariffCode}</zmf:Code>
              <zmf:CodeDescription>${product.Description}</zmf:CodeDescription>
              <zmf:ChargeableUnit>U</zmf:ChargeableUnit>
              <zmf:ChargeableQuantity>${product.Qty}</zmf:ChargeableQuantity>
              <zmf:SectionType>F</zmf:SectionType>
              <zmf:ServiceStartDateTime>${product.AdmissionDate}</zmf:ServiceStartDateTime>
              <zmf:ServiceEndDateTime>${product.DischargeDate}</zmf:ServiceEndDateTime>
              <zmf:ExternalReferenceNumber>A1223422</zmf:ExternalReferenceNumber>
              <zmf:BenefitCode>A223</zmf:BenefitCode>
              <zmf:BenefitDescription>Descr</zmf:BenefitDescription>
              <zmf:NumberOfConsumables>0</zmf:NumberOfConsumables>
              <zmf:Identifier>0</zmf:Identifier>
              <zmf:NumberOfLaboratoryRecords>0</zmf:NumberOfLaboratoryRecords>
              <zmf:NumberOfToothRecords>0</zmf:NumberOfToothRecords>
              <zmf:NumberOfDentalLaboratoryRecords>0</zmf:NumberOfDentalLaboratoryRecords>
              <zmf:NumberOfOptometryRecords>0</zmf:NumberOfOptometryRecords>
              <zmf:WhomToPay>P</zmf:WhomToPay>
              <zmf:UpdateIndicator>N</zmf:UpdateIndicator>
              ${this.Authorisation(header)}
              ${this.DiagnosisArray(product.Diagnosis)}
              <zmf:SubTotalValues>
                <zmf:GrossAmount>${product.Price}</zmf:GrossAmount>
                <zmf:NettAmount>${product.Price}</zmf:NettAmount>
                <zmf:ReceiptAmount>0</zmf:ReceiptAmount>
                <zmf:LevyAmount>0</zmf:LevyAmount>
                <zmf:DiscountAmount>0</zmf:DiscountAmount>
                <zmf:GenericSurchargeAmount>0</zmf:GenericSurchargeAmount>
                <zmf:PatientPayAmount>0</zmf:PatientPayAmount>
                <zmf:OverChargeAmount>0</zmf:OverChargeAmount>
                <zmf:ContainerFeeAmount>0</zmf:ContainerFeeAmount>
                <zmf:DispensingFeeAmount>0</zmf:DispensingFeeAmount>
                <zmf:ProfessionalFeeAmount>0</zmf:ProfessionalFeeAmount>
                <zmf:VarianceAmount>0</zmf:VarianceAmount>
              </zmf:SubTotalValues>
              <zmf:TotalValues>
                <zmf:GrossAmount>${product.Price}</zmf:GrossAmount>
                <zmf:NettAmount>${product.Price}</zmf:NettAmount>
                <zmf:ReceiptAmount>0</zmf:ReceiptAmount>
                <zmf:LevyAmount>0</zmf:LevyAmount>
                <zmf:DiscountAmount>0</zmf:DiscountAmount>
                <zmf:GenericSurchargeAmount>0</zmf:GenericSurchargeAmount>
                <zmf:PatientPayAmount>0</zmf:PatientPayAmount>
                <zmf:OverChargeAmount>0</zmf:OverChargeAmount>
                <zmf:ContainerFeeAmount>0</zmf:ContainerFeeAmount>
                <zmf:DispensingFeeAmount>0</zmf:DispensingFeeAmount>
                <zmf:ProfessionalFeeAmount>0</zmf:ProfessionalFeeAmount>
                <zmf:VarianceAmount>0</zmf:VarianceAmount>
              </zmf:TotalValues>
            </zmf:Service>
    `
  }

  Consumables(products: IProduct[]) {
    return products.map((x: IProduct) => this.Consumable(x)).join('\n')
  }

  Consumable(product: IProduct) {
    return `
    <zmf:Consumable>
        <zmf:Type>L</zmf:Type>
        <zmf:Number>${product.Number}</zmf:Number>
        <zmf:CodeSet>NSC</zmf:CodeSet>
        <zmf:Code>${product.TariffCode}</zmf:Code>
        <zmf:Description>${product.Description}</zmf:Description>
        <zmf:Quantity>${product.Qty}</zmf:Quantity>
        <zmf:DaysSupply>1</zmf:DaysSupply>
        <zmf:SectionType>R</zmf:SectionType>
        <zmf:DispensedDate>${product.AdmissionDate}</zmf:DispensedDate>
        <zmf:WhomToPay>P</zmf:WhomToPay>
        <zmf:Identifier>793452</zmf:Identifier>
        <zmf:TotalValues>
          <zmf:GrossAmount>${product.Price}</zmf:GrossAmount>
          <zmf:NettAmount>0</zmf:NettAmount>
          <zmf:ReceiptAmount>0</zmf:ReceiptAmount>
          <zmf:LevyAmount>0</zmf:LevyAmount>
          <zmf:DiscountAmount>0</zmf:DiscountAmount>
          <zmf:GenericSurchargeAmount>0</zmf:GenericSurchargeAmount>
          <zmf:PatientPayAmount>0</zmf:PatientPayAmount>
          <zmf:OverChargeAmount>0</zmf:OverChargeAmount>
          <zmf:ContainerFeeAmount>0</zmf:ContainerFeeAmount>
          <zmf:DispensingFeeAmount>0</zmf:DispensingFeeAmount>
          <zmf:ProfessionalFeeAmount>0</zmf:ProfessionalFeeAmount>
          <zmf:VarianceAmount>0</zmf:VarianceAmount>
        </zmf:TotalValues>
      </zmf:Consumable>
    `
  }
  Transaction(claim: IClaim) {
    return `
      <zmf:Transaction>
        <zmf:VersionNumber>${process.env.VersionNumber}</zmf:VersionNumber>
        <zmf:Type>${claim.header?.Type}</zmf:Type>
        <zmf:Number>${claim.header.TransactionNo}</zmf:Number>
        <zmf:DestinationCode>${claim.patient?.Funder}A</zmf:DestinationCode>
        <zmf:SoftwareIdentifier>${process.env.SoftwareIdentifier}</zmf:SoftwareIdentifier>
        <zmf:DateTime>${claim.header?.ClaimDate}</zmf:DateTime>
        <zmf:TransactionLink>${process.env.TransactionLink}</zmf:TransactionLink>
        <zmf:TestClaimIndicator>${process.env.TestClaimIndicator}</zmf:TestClaimIndicator>
        <zmf:CountryISOCode>${process.env.CountryISOCode}</zmf:CountryISOCode>
      </zmf:Transaction>
    `
  }

  Provider() {
    return `
        <zmf:Provider>
          <zmf:Role>${process.env.Role}</zmf:Role>
          <zmf:PracticeNumber>${process.env.PracticeNumber}</zmf:PracticeNumber>
          <zmf:PracticeName>${process.env.PracticeName}</zmf:PracticeName>
        </zmf:Provider>
    `
  }

  Member(member: IMember) {
    return `
      <zmf:Member>
        <zmf:MedicalSchemeNumber>${member.MedicalSchemeNumber ?? ''}</zmf:MedicalSchemeNumber>
        <zmf:MedicalSchemeName>${member.MedicalSchemeName ?? ''}</zmf:MedicalSchemeName>
      </zmf:Member>
    `
  }

  Patient(patient: IPatient) {
    return `
    <zmf:Patient>
      <zmf:DependantCode>${patient.DependantCode ?? ''}</zmf:DependantCode>
      <zmf:NewBornIndicator>${patient.NewBornIndicator ?? ''}</zmf:NewBornIndicator>
      ${this.Personal(patient.personal)}

    </zmf:Patient>
    `
  }

  Personal(personal?: IPersonal) {
    return `
    <zmf:Personal>
        <zmf:Title>${personal?.Title ?? ''}</zmf:Title>
        <zmf:Surname>${personal?.Surname ?? ''}</zmf:Surname>
        <zmf:FirstName>${personal?.FirstName ?? ''}</zmf:FirstName>
        <zmf:Initials>${personal?.Initials ?? ''}</zmf:Initials>
        <zmf:Gender>${personal?.Gender ?? ''}</zmf:Gender>
        <zmf:DateOfBirth>${personal?.DateOfBirth ?? ''}</zmf:DateOfBirth>
      </zmf:Personal>
    `
  }

  Header(header: IHeader) {
    return `
    <zmf:ClaimHeader>
        <zmf:ClaimNumber>${header.No}</zmf:ClaimNumber>
        <zmf:ClaimDateTime>${header.ClaimDate}</zmf:ClaimDateTime>
        <zmf:TotalServices>${header.TotalServices}</zmf:TotalServices>
        <zmf:TotalConsumables>${header.TotalConsumables}</zmf:TotalConsumables>
        <zmf:WhomToPay>P</zmf:WhomToPay>
        <zmf:InHospitalIndicator>N</zmf:InHospitalIndicator>
        <zmf:MVAIndicator>N</zmf:MVAIndicator>
        <zmf:IODIndicator>N</zmf:IODIndicator>
        <zmf:AccidentIndicator>N</zmf:AccidentIndicator>
        <zmf:EmergencyIndicator>N</zmf:EmergencyIndicator>
        <zmf:DateOfAccident>20240331000300</zmf:DateOfAccident>
        <zmf:WCANo>NA</zmf:WCANo>
        <zmf:BatchNumber>NA</zmf:BatchNumber>
        <zmf:BatchDateTime>${header.ClaimDate}</zmf:BatchDateTime>
        ${this.Authorisation(header)}
        ${this.TotalValues(header)}
      </zmf:ClaimHeader>
    `
  }

  TotalValues(header: IHeader) {
    return `
      <zmf:TotalValues>
        <zmf:GrossAmount>${header.GrossAmount}</zmf:GrossAmount>
        <zmf:NettAmount>${header.GrossAmount}</zmf:NettAmount>
        <zmf:ReceiptAmount>0</zmf:ReceiptAmount>
        <zmf:LevyAmount>0</zmf:LevyAmount>
        <zmf:DiscountAmount>0</zmf:DiscountAmount>
        <zmf:GenericSurchargeAmount>0</zmf:GenericSurchargeAmount>
        <zmf:PatientPayAmount>0</zmf:PatientPayAmount>
        <zmf:OverChargeAmount>0</zmf:OverChargeAmount>
        <zmf:ContainerFeeAmount>0</zmf:ContainerFeeAmount>
        <zmf:DispensingFeeAmount>0</zmf:DispensingFeeAmount>
        <zmf:ProfessionalFeeAmount>0</zmf:ProfessionalFeeAmount>
        <zmf:VarianceAmount>0</zmf:VarianceAmount>
      </zmf:TotalValues>
    `
  }
}
