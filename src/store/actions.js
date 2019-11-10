/* eslint-disable space-before-function-paren */
import { getAppname } from '@/api/app'
import { login, validate } from '../api/user'

const actions = {
  // updateAppname ({ commit }) {
  //   getAppname().then(res => {
  //     const { info } = res
  //     commit('SET_APP_NAME', info)
  //   }).catch(err => { console.log(err) })
  // }

  async updateAppname({ commit }) {
    try {
      const { info } = await getAppname()
      console.log(info)
      commit('SET_APP_NAME', info)
    } catch (err) {
      console.log(err)
    }
  },
  async toLogin({ commit }, username) {
    let rs = await login(username)
    console.log(rs.data.token)
    if (rs.data.code === 0) {
      commit('UPDATE_USERNAME', rs.data.username)
      commit('UPDATE_TOKEN', rs.data.token)
    } else {
      return Promise.reject(rs.data)
    }
  },
  async validate({ commit }) {
    let res = await validate()
    if (res.data.code === 0) {
      commit('UPDATE_USERNAME', res.data.username)
      commit('UPDATE_TOKEN', res.data.token)
    }
    return res.data.code === 0
  }
}

export default actions
