import { ITotalValues } from './ITotalValues.js'
import { IAuthorisation } from './IAuthorisation.js'
import { IDiagnosis } from './IDiagnosis.js'
import { ISubTotalValues } from './ISubTotalValues.js'

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface IService {
  Type: string
  Number: string
  CodeSet: string
  Code: string
  CodeDescription: string
  ChargeableUnit: string
  ChargeableQuantity: string
  SectionType: string
  ServiceStartDateTime: string
  ServiceEndDateTime: string
  ExternalReferenceNumber: string
  BenefitCode: string
  BenefitDescription: string
  NumberOfConsumables: string
  Identifier: string
  NumberOfLaboratoryRecords: string
  NumberOfToothRecords: string
  NumberOfDentalLaboratoryRecords: string
  NumberOfOptometryRecords: string
  WhomToPay: string
  UpdateIndicator: string
  authorisation: IAuthorisation
  diagnosis: IDiagnosis[]
  subtotal: ISubTotalValues
  totalValues: ITotalValues

}
