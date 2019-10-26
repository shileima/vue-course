/* eslint-disable space-before-function-paren */
export const setTitle = (title) => {
  document.title = title || 'Homepage Vue Admin'
}
export function getProducts(val) {
  if (!val) return []
  return data.filter(item => item.startsWith(val))
}

const data = ['nike', 'newbanlen', 'xtep', 'xhhtt', 'oppo', 'ochants']

// let arr = data.filter(item => item.startsWith('n'))

// console.log(arr);
