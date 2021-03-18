import axios from 'axios'

const request = axios.create({
  baseURL: 'http://123.57.176.198:3000',
  timeout: 5000,

  withCredentials: false,
})

request.interceptors.response.use(function responseHandler(response) {
  if (response.status === 200) {
    return response.data;
  } else {
    return false;
  }
})

export default request