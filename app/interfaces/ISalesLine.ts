import {IDiagnosis} from "./IDiagnosis.js";

export interface ISalesLine{
  No: string
  EpisodeID: string
  TariffCode: string
  GroupDescription: string
  Description: string
  Type: string
  Quantity: number
  PostingDate: string
  NappiCode: string
  UnitPrice: number
  Amount: number
  DischargeDate: string
  AdmissionDate: string
  Diagnosis: IDiagnosis[]
}

export interface ISalesHeader{
  No: string
  Number: number
  TariffCode: string
  EpisodeID: string
  GroupDescription: string
  Quantity: number
  Amount: number
  Type: string
  NoOfConsumables: number
  SalesLine: ISalesLine[]
  Diagnosis: IDiagnosis[]
  DischargeDate: string
  AdmissionDate: string
}
