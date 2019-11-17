/* eslint-disable space-before-function-paren */
import axios from 'axios'
import { BASE_URL } from '@/config'
class HttpRequest {
  constructor(baseUrl = BASE_URL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  // global config
  getInsideConfig() {
    const config = {
      baseUrl: this.baseUrl,
      headers: {

      }
    }
    return config
  }
  interceptors(instance, url) {
    instance.interceptors.request.use(config => {
      // add global loading(vue Spin component)
      console.log('interceptors.request')
      // console.log(config)
      if (!Object.keys(this.queue).length) {
        // Spin.show()
        document.title = 'loading...'
      }
      this.queue[url] = true
      return config
    }, err => {
      return Promise.reject(err)
    })
    instance.interceptors.response.use(res => {
      console.log('interceptors.response')
      delete this.queue[url]
      document.title = 'done'
      // console.log(res)
      return res.data
    }, err => {
      delete this.queue[url]
      document.title = 'done'
      return Promise.reject(err)
    })
  }
  request(options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}

export default HttpRequest
