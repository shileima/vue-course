import Mock from 'mockjs'
export const getTableData = () => {
  console.log('getTableData Mock')
  const template = {
    'list|5': [{
      'name': '@name',
      'age|18-25': 0,
      'email': '@email' // Mock.mock('@email'),
    }]
  }
  return Mock.mock(template)
}
