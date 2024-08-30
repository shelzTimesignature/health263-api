import axios from 'axios'

const http = axios.create({
  baseURL: `https://test-submit.health263.systems:8081`,
  headers: {
    'Content-Type': 'text/xml;charset=UTF-8'
  },
})

export default http
