/* eslint-disable */
import axios from 'axios'
const baseUrl = 'https://api-blogs-swuo.onrender.com/api/login'

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { login }