/* eslint-disable space-before-function-paren */
import { getAppname } from '@/api/app'
import { login, validate } from '../api/user'
import { setToken } from '../lib/util'

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
  async toLogin({ commit }, { username, password }) {
    let rs = await login(username, password)
    setToken(rs.data.data.token)
    console.log(rs)
    if (rs.data.code === 200) {
      commit('UPDATE_USERNAME', rs.data.username)
      commit('UPDATE_TOKEN', rs.data.data.token)
    } else {
      return Promise.reject(rs.data.mes)
    }
  },
  async validate({ commit }) {
    let res = await validate()
    console.log(res)
    if (res.data.code === 0) {
      commit('UPDATE_USERNAME', res.data.username)
      commit('UPDATE_TOKEN', res.data.token)
    }
    return res.data.code === 0
  },
  async logout({ commit }) {
    commit('UPDATE_TOKEN', '')
  }
}

export default actions
