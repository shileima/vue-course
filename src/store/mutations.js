import Vue from 'vue'

const mutations = {
  SET_APP_NAME (state, { value }) {
    state.appName = value
  },
  SET_APP_VERSION (state) {
    Vue.set(state, 'appVersion', 'v1.0')
  },
  UPDATE_STATE_VALUE (state, value) {
    console.log('UPDATE_STATE_VALUE')
    state.stateValue = value
  }
}

export default mutations
