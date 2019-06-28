import Axios from 'axios'

export const HTTP = Axios.create({
    baseURL: `http://127.0.0.1:8000/api/`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization' :'Token c5443d32287c4e57c912322dafeeed267b35c36f'
    }
})