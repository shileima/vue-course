/* eslint-disable space-before-function-paren */
import axios from 'axios'
import store from '../store'

class AjaxRequest {
  // baseUrl
  constructor() {
    this.baseUrl = process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:3000'
    this.timeout = 3000
    this.queue = {}
  }
  mergeConfig(options) {
    return { baseURL: this.baseUrl, timeout: this.timeout, ...options }
  }
  setInterceptor(instance, url) {
    instance.interceptors.request.use(config => {
      if (Object.keys(this.queue).length === 0) {
        store.commit('SET_SHOW_LOADING')
      }
      this.queue[url] = url
      config.headers.Authorization = JSON.parse(localStorage.getItem('state')).token
      return config
    })
    instance.interceptors.response.use(res => {
      delete this.queue[url]
      if (Object.keys(this.queue).length === 0) {
        store.commit('SET_HIDE_LOADING')
      }
      return res
    })
  }
  request(options) {
    let instance = axios.create()
    this.setInterceptor(instance, options.url)
    let config = this.mergeConfig(options)
    return instance(config)
  }
}

export default new AjaxRequest()
