import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import user from './module/user'
import getters from './getters'

import saveInLocal from './plugins/saveInLocal'

Vue.use(Vuex)

export default new Vuex.Store({
  // do not mutate vuex store state outside
  strict: process.env.NODE_ENV === 'development',
  state,
  getters,
  mutations,
  actions,
  modules: {
    user
  }

})
