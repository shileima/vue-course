import axios from 'axios'
import { BASE_URL } from '@/config/index'

class HttpRequest {
  constructor (baseUrl = BASE_URL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig () {
    const config = {
      baseUrl: this.baseUrl,
      headers: {
        //
      }
    }
    return config
  }
  // 请求前后的拦截器设置
  interceptors (instance) {
    instance.interceptors.request.use(config => {
      // add global loading
      // Spin.show()
      return config
    }, err => { return Promise.reject(err) })
    instance.interceptors.response.use(res => {
      console.log(res)
      return res
    }, err => {
      return Promise.reject(err)
    })
  }
  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance)
    return instance(options)
  }
}
export default HttpRequest
