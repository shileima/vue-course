/* eslint-disable space-before-function-paren */
import Vue from 'vue'
import { setToken } from '../lib/util'

const mutations = {
    SET_APP_NAME (state, { value }) {
        state.appName = value
    },
    SET_APP_VERSION (state) {
        Vue.set(state, 'appVersion', 'v2.0')
    },
    UPDATE_STATE_VALUE (state, value) {
        console.log('UPDATE_STATE_VALUE')
        state.stateValue = value
    },
    SET_SHOW_LOADING (state) {
        console.log('show')
        state.isLoading = true
    },
    SET_HIDE_LOADING (state) {
        console.log('hide')
        state.isLoading = false
    },
    UPDATE_USERNAME (state, username) {
        state.username = username
        state.hasLogined = true
    },
    UPDATE_TOKEN (state, token) {
        state.token = token
        setToken(token)
    }
}

export default mutations
