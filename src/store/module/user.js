const state = {
  userName: 'Loading'
}
const getters = {
  firstLetter: state => {
    return state.userName.substr(0, 1)
  }
}

const actions = {
  updateUserName({ commit, state, rootState, dispatch }) {

  }
}

const mutations = {
  SET_USER_NAME(state, params) {
    state.userName = params
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  modules: {
    //
  }
}
