import { ITotalValues } from './ITotalValues.js'
import { IAuthorisation } from './IAuthorisation.js'

export interface IClaimHeader {
  ClaimNumber: string
  ClaimDateTime: string
  TotalServices: number
  TotalConsumables: number
  WhomToPay: string
  InHospitalIndicator: string
  MVAIndicator: string
  IODIndicator: string
  AccidentIndicator: string
  EmergencyIndicator: string
  DateOfAccident: string
  WCANo: string
  BatchNumber: string
  BatchDateTime: string
  authorisation: IAuthorisation
  totalValues: ITotalValues
}
