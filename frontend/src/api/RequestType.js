import Axios from 'axios'

export const HTTP = Axios.create({
    baseURL: `https://thongmonyoudom.pythonanywhere.com/api/`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization' :'Token 5c9950000f2f631baaaef031e5fbb95b51bbb5e6'
    }
})