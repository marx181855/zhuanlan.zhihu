import axios from 'axios'

function request (config) {
  const instance = axios.create({
    baseURL: 'https://api.vikingship.xyz',
    timeout: 3000
  })

  instance.interceptors.request.use(config => {
    return config
  }, err => {
    return err
  })

  instance.interceptors.response.use(res => {
    return res
  }, err => {
    return err
  })

  return instance(config)
}

export default request
