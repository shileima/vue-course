import Vue from 'vue'

const mutations = {
  SET_APP_NAME (state, { value }) {
    state.appName = value
  },
  SET_APP_VERSION (state) {
    Vue.set(state, 'appVersion', 'v1.0')
  },
  SET_STATE_VALUE (state, value) {
    state.stateValue = value
  },
  SET_GET_VALUE (state, value) {
    state.stateGetValue = value
  }
}

export default mutations
