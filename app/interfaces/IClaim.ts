
import { IMember } from './IMember.js'
import { IPatient } from './IPatient.js'
import { IProduct } from './IProduct.js'
import { IHeader } from './IHeader.js'
import { ISalesHeader } from './ISalesLine.js'

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface IClaim {
  member: IMember
  patient: IPatient
  header: IHeader
  products: IProduct[]
}

export interface ICimasClaim {
  member: IMember
  patient: IPatient
  header: IHeader
  products: ISalesHeader[]
}
