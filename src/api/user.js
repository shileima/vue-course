import axios from './index'

export const getUserInfo = ({ userId }) => {
  console.log('getUserInfo')
  return axios.request({
    url: '/api/getUserInfo',
    method: 'post',
    data: { userId }
  })
}
