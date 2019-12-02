import ajax from '../lib/ajaxRequest'

export const getTableData = () => {
  return ajax.request({
    url: '/api/getTableData',
    method: 'get'
  })
}
