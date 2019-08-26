const state = {
  userName: 'Loading'
}
const getters = {
  firstLetter: state => {
    return state.userName.substr(0, 1)
  }
}

const actions = {
  //
}

const mutations = {
  //
}

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
}
