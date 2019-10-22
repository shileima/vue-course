const getters = {
  appNameWithVersion: state => {
    console.log(state)

    return `${state.appName}-v2.0`
  }
}

export default getters
