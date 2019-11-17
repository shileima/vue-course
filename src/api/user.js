import axios from './index'
import ajax from '../lib/ajaxRequest'

export const getUserInfo = ({ userId }) => {
  console.log('getUserInfo')
  return axios.request({
    url: '/api/getUserInfo',
    method: 'post',
    data: { userId }
  })
}

export const getUser = () => {
  return ajax.request({
    url: '/user',
    method: 'get'
  })
}

export const login = (username, password) => {
  return ajax.request({
    url: '/login',
    method: 'post',
    data: { username, password }
  })
}

export const validate = () => {
  return ajax.request({
    url: '/validate',
    method: 'get'
  })
}
