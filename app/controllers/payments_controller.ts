//import type { HttpContext } from '@adonisjs/core/http'
// @ts-ignore
import { Paynow } from 'paynow'
import { HttpContext } from '@adonisjs/core/http'
export default class PaymentsController {
  paynow = new Paynow('19230', 'ca3b8cf4-b0db-4f95-a309-c705d48bc38e')
  async post({ request }: HttpContext) {
    try {
      const { phone, provider } = request.body()
      // Set return and result urls
      this.paynow.resultUrl = 'http://example.com/gateways/paynow/update'
      this.paynow.returnUrl = 'http://example.com/return?gateway=paynow&merchantReference=1234'

      let payment = this.paynow.createPayment('Invoice 35', 'sheltontembo@gmail.com')
      payment.add('Bananas', 2.5)
      payment.add('Apples', 3.4)
      //const result = await this.paynow.send(payment)
      const res = await this.paynow.sendMobile(payment, phone, provider)
      return res
    } catch (e) {
      return e
    }
  }
}
