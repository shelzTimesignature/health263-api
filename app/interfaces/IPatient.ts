
import { IPersonal } from './IPersonal.js'

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface IPatient {
  DependantCode?: string
  NewBornIndicator?: string
  Funder?: string
  MedicalAidNo?: string
  personal?: IPersonal
}
