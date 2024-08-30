
export interface IHeader{
  No: string
  PatientNo: string
  EpisodeNo: string
  TransactionNo: string
  AdmissionDate: string
  DischargeDate: string
  AdmissionTime: string
  DischargeTime: string
  ClaimDate: string
  AuthorisedDate: string
  TotalServices: number
  TotalConsumables: number
  Type: string
  GrossAmount: number
  ICD10: string
  FunderCode: string
  AuthorisationNumber: string
  PreAuthorisationNumber: string
}
