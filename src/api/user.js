import axios from './index'

export const getUserInfo = () => {
  return axios.request({
    url: '/userInfo',
    method: 'post'
  })
}
