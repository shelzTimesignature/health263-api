import { HttpContext } from '@adonisjs/core/http'

export default class VerificationsController {
  post({ request, response }: HttpContext) {
    try {
      return request.all()
    } catch (e) {
      response.abort({
        msg: e.message ?? 'something went wrong',
      })
    }
  }
}
