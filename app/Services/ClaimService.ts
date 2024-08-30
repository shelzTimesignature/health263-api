// eslint-disable-next-line unicorn/filename-case
import ClaimProcessor from '../processors/claim_processor.js'
import { IClaim } from '../interfaces/IClaim.js'
import axios from 'axios'
import logger from '@adonisjs/core/services/logger'

export default class ClaimService {
  async processor(claim: IClaim) {
    const body: string = new ClaimProcessor().Claim(claim)
    logger.info('claim-request', body)
    const { data } = await axios.post('/', body)
    logger.info('claim-response', body)
    console.log(data)
    return data
  }
}
