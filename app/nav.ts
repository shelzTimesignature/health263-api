import axios from 'axios'
import { AuthorisationHeaders, API_URL } from './Config.js'

const NAV = axios.create({
  baseURL: `${API_URL}`,
  ...AuthorisationHeaders,
})

export default NAV
