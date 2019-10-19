/* eslint-disable space-before-function-paren */
import { getAppname } from '@/api/app'

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
  }
}

export default actions
