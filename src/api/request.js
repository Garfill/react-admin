import axios from 'axios'

const BASE_URL = process.env.REACT_APP_API_URL;
console.log('BASE_URL', BASE_URL);
const request = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,

  withCredentials: false,
})

request.interceptors.response.use((response) => {
  if (response.status === 200) {
    console.log('response.config.url :>> ', response.config.url);
    console.log('response.data :>> ', response.data);
    return response.data;
  } else {
    return Promise.reject(new Error(response.message || 'Network Error'));
  }
})

export default request