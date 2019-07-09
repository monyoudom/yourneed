import Axios from 'axios'

export const HTTP = Axios.create({
    baseURL: `http://127.0.0.1:8000/api/`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization' :'Token 4a357e5e5c5949d69383998ab2ce44848acce73a'
    }
})