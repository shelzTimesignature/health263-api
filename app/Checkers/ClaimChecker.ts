
import { IHeader } from '../interfaces/IHeader.js'
import { IPatient } from '../interfaces/IPatient.js'
import moment from 'moment'

export default class ClaimChecker {
  checkHeader(data: IHeader | null, response: any): IHeader {
    if (data === null) {
      response.abort({
        msg: 'Claim  not found',
      })
    }
    if (data?.No.length === 0) {
      response.abort({
        msg: 'Claim No  not found',
      })
    }

    if (data?.Type === '0') {
      response.abort({
        msg: 'Please Select Claim Type (Claim/Reversal)',
      })
    }

    if (data?.PatientNo?.length === 0) {
      response.abort({
        msg: 'Patient No  not found',
      })
    }

    if (data?.EpisodeNo?.length === 0) {
      response.abort({
        msg: 'Episode No  not found',
      })
    }

    if (data?.AdmissionDate?.length === 0) {
      response.abort({
        msg: 'Admission Date is not found',
      })
    }

    if (data?.DischargeDate.length === 0) {
      response.abort({
        msg: 'Discharge Date is not found',
      })
    }

    if (data?.AdmissionTime.length === 0) {
      response.abort({
        msg: 'Admission Time is not found',
      })
    }

    if (data?.DischargeTime.length === 0) {
      response.abort({
        msg: 'Discharge Time is not found',
      })
    }

    if (data?.Type.length === 0) {
      response.abort({
        msg: 'We are not sure if your claim is a reversal or a normal claim. please specify',
      })
    }

    if (data?.AuthorisationNumber.length === 0) {
      response.abort({
        msg: 'Claim authorisation number is not found',
      })
    }

    if (data?.PreAuthorisationNumber.length === 0) {
      response.abort({
        msg: 'Claim pre-authorisation number is not found',
      })
    }

    if (data?.FunderCode.length === 0) {
      response.abort({
        msg: 'Medical Aid Funder Code is not found',
      })
    }

    data!.AdmissionDate = moment(data?.AdmissionDate + ' ' + data?.AdmissionTime).format(
      'YYYYMMDDHHmmss'
    )

    data!.DischargeDate = moment(data?.DischargeDate + ' ' + data?.DischargeTime).format(
      'YYYYMMDDHHmmss'
    )

    return data!
  }

  checkPatient(data: IPatient | null, response: any): IPatient {
    if (data === null) {
      response.abort({
        msg: 'Claim  not found',
      })
    }
    if (data?.DependantCode?.length === 0) {
      response.abort({
        msg: 'Patient Suffix  not found',
      })
    }

    // if (data?.Funder?.length === 0) {
    //   response.abort({
    //     msg: 'Funder/ Medical Aid No. not found',
    //   })
    // }

    if (data?.NewBornIndicator?.length === 0) {
      response.abort({
        msg: 'NewBornIndicator  not found',
      })
    }

    if (data?.MedicalAidNo?.length === 0) {
      response.abort({
        msg: 'Medical Aid Member No  not found',
      })
    }

    if (data?.personal?.DateOfBirth?.length === 0) {
      response.abort({
        msg: 'Date of Birth not found',
      })
    }

    // @ts-ignore
    data.personal.DateOfBirth = String(moment(data?.personal?.DateOfBirth).format('YYYYMMDD'))

    return data!
  }
}
