import { getAppname } from '@/api/app'

const actions = {
  // updateAppname ({ commit }) {
  //   getAppname().then(res => {
  //     const { info } = res
  //     commit('SET_APP_NAME', info)
  //   }).catch(err => { console.log(err) })
  // }

  async updateAppname ({ commit }) {
    try {
      const { info } = await getAppname()
      commit('SET_APP_NAME', info)
    } catch (err) {
      console.log(err)
    }
  }
}

export default actions
