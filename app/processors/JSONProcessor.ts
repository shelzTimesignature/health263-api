
// @ts-ignore
import * as xml2js from 'xml2js'
export default class JSONProcessor {
  parser = new xml2js.Parser({
    explicitArray: false,
  })

  Processor(xml: any) {
    return new Promise((resolve, reject) => {
      // @ts-ignore
      this.parser.parseString(xml, (err, result) => {
        if (err) {
          reject(err)
        }
        resolve(result)
      })
    })
  }

  async ClaimProcessor(xml: any) {
    const result: any = await this.Processor(xml)

    const x = result['soap:Envelope']['soap:Body']['ns2:processZMFResponse']['ns2:ZMF2_1Response']

    const transaction = this.RemoveCharFromKeys(x, 'ns3:')
    return transaction
  }

  RemoveCharFromKeys(obj: any, charToRemove: any): any {
    if (typeof obj !== 'object' || obj === null) {
      return obj // Base case: return non-object values as is
    }

    // If obj is an array, iterate through its elements
    if (Array.isArray(obj)) {
      return obj.map((item) => this.RemoveCharFromKeys(item, charToRemove))
    }

    const newObj = {}
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const newKey = key.replace(new RegExp(charToRemove, 'g'), '') // Remove the specified character
        // @ts-ignore
        newObj[newKey] = this.RemoveCharFromKeys(obj[key], charToRemove) // Recursively handle nested objects
      }
    }
    return newObj
  }



  async MemberProcessor(xml:any){
    const result: any = await this.Processor(xml)
    const x =
      result['soap:Envelope']['soap:Body']['ns2:processResponse']['ns2:response']['ns3:Member'][
        'ns3:Response'
      ]

    const transaction = this.RemoveCharFromKeys(x, 'ns3:')
    return transaction
  }


  MsgFormater(arr: any){
    let msg= ''
    if (arr === undefined || arr === null) {
      msg = 'Transaction Failed'
    }

    if (!Array.isArray(arr)) {
      msg = arr._
    }

    if (Array.isArray(arr)) {
      if (arr.length > 1) {
        msg = arr[0]._
      } else {
        msg = arr[0]._
      }
    }

    return msg
  }
}
