import JSONProcessor from './JSONProcessor.js'
import { ILookup, IMemberDetail } from '../interfaces/ILookup.js'
import http from '../http.js'
export class MemberLookupProcessor {
  async processor(dto: ILookup) {
    const body = `
    <x:Envelope
        xmlns:x="http://schemas.xmlsoap.org/soap/envelope/"
        xmlns:apa="http://apace.systems/apacewebservices/"
        xmlns:urn="urn:apace:member:format:1.0">
    <x:Header>
        <apa:secureToken>${process.env.TOKEN}</apa:secureToken>
    </x:Header>
    <x:Body xmlns:x="http://schemas.xmlsoap.org/soap/envelope/">
        <apa:process xmlns:apa="http://apace.systems/apacewebservices/">
            <apa:request>
                <urn:Member xmlns:urn="urn:apace:member:format:1.0">
                    <urn:Request>
                        <urn:Transaction>
                            <urn:VersionNumber>${process.env.VERSION}</urn:VersionNumber>
                            <urn:Number>${process.env.NUMBER}</urn:Number>
                            <urn:SystemIdentifier>${process.env.SYSTEM_IDENTIFIER}</urn:SystemIdentifier>
                            <urn:DestinationCode>${dto.Funder}A</urn:DestinationCode>
                            <urn:ClientCountryCode>${process.env.COUNTRY}</urn:ClientCountryCode>
                            <urn:Timestamp TimeZone="Africa/Harare">20211124153406</urn:Timestamp>
                            <urn:TestIndicator>${process.env.TEST_INDICATOR}</urn:TestIndicator>
                            <urn:User>${process.env.USER}</urn:User>
                        </urn:Transaction>
                        <urn:MembershipLookup>
                            <urn:IncludeDetail>Y</urn:IncludeDetail>
                            <urn:Funder>${dto.Funder}</urn:Funder>
                            <urn:WithMembershipNumber>
                                <urn:MembershipNumber>${dto.MembershipNo}</urn:MembershipNumber>
                                <urn:DependentCode>${dto.Suffix}</urn:DependentCode>
                            </urn:WithMembershipNumber>
                        </urn:MembershipLookup>
                    </urn:Request>
                </urn:Member>
            </apa:request>
        </apa:process>
    </x:Body>
</x:Envelope>
    `

    const { data } = await http.post(`/apacewebservices/AMF1_0?wsdl`, body)

    const z = new JSONProcessor()
    const x = await z.MemberProcessor(data)

    if (x.Transaction.Status.toUpperCase() === 'F') {
      throw {
        message: z.MsgFormater(x.Message) ?? 'Something went wrong',
      }
    }

    const w = x.Membership

    const result = <IMemberDetail>{
      NumberOfBeneficiaryRecord: w['$']['NumberOfBeneficiaryRecords'] ?? '',
      MembershipNumber: w?.MembershipNumber ?? '',
      DependantCode: w?.Beneficiary?.DependentCode ?? '',
      Funder: dto.Funder,
      Type: w?.Beneficiary?.Type ?? '',
      Status: w?.Beneficiary?.Status ?? '',
      BiometricEnrollmentStatus: w?.Beneficiary?.BiometricEnrolmentStatus ?? '',
      Surname: w?.Beneficiary?.BeneficiaryDetail?.Surname ?? '',
      FirstName: w?.Beneficiary?.BeneficiaryDetail?.FirstName ?? '',
      Initials: w?.Beneficiary?.Initials,
      Title: w?.Beneficiary?.BeneficiaryDetail?.Title ?? '',
      Gender: w?.Beneficiary?.BeneficiaryDetail?.Gender ?? '',
      DOB: w?.Beneficiary?.BeneficiaryDetail?.DateOfBirth ?? '',
      NationalIDNumber: w?.Beneficiary?.BeneficiaryDetail?.NationalIDNumber ?? '',
      MaritalStatus: w?.Beneficiary?.BeneficiaryDetail?.MaritalStatus ?? '',
      TerminationDate: w?.Beneficiary?.BeneficiaryDetail?.TerminationDate ?? '',
      City: w?.Beneficiary?.Address?.City ?? '',
      Code: w?.Beneficiary?.Address?.Code ?? '',
      Country: w?.Beneficiary?.Address?.Country ?? '',
      Mobile: w?.Beneficiary?.ContactDetail?.MobilePrimary ?? '',
    }

    return result
  }
}
