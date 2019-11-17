/* eslint-disable space-before-function-paren */
import Cookies from 'js-cookie'

export const setTitle = (title) => {
  document.title = title || 'Homepage Vue Admin'
}

export const setToken = (token, tokenName = 'token') => {
  Cookies.set(tokenName, token)
}

export const getToken = (tokenName = 'token') => Cookies.get(tokenName)

export function getProducts(val) {
  if (!val) return []
  return data.filter(item => item.startsWith(val))
}

const data = ['nike', 'newbanlen', 'xtep', 'xhhtt', 'oppo', 'ochants']

// let arr = data.filter(item => item.startsWith('n'))

// console.log(arr);
