import type { HttpContext } from '@adonisjs/core/http'
import { lookupValidator } from '#validators/lookup'
import { ILookup } from '../interfaces/ILookup.js'

export default class MembersController {
  async post({ request, response }: HttpContext) {
    try {
      const bodyX = request.all()
      const { Funder, Suffix, MembershipNo } = await lookupValidator.validate(bodyX)

      const member: ILookup = {
        Funder,
        Suffix,
        MembershipNo,
      }


      return member
    } catch (e) {
      response.abort({
        msg: e.message ?? 'something went wrong',
      })
    }
  }
}
