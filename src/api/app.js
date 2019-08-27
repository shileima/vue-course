export const getAppname = () => {
  return new Promise((resolve, reject) => {
    let err = null
    setTimeout(() => {
      if (!err) resolve({ info: { value: 'new App name' } })
      else reject(err)
    }, 1000)
  })
}
