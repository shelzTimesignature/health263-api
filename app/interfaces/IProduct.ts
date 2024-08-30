
import { IDiagnosis } from './IDiagnosis.js'

export interface IProduct{
  Number: number
  Description: string
  Qty: number
  Price: number
  TariffCode: string
  type: string
  AdmissionDate: string
  DischargeDate: string
  Diagnosis: IDiagnosis[]
}
