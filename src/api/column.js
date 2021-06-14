import request from './requests'

export function getColumnList (page = 1, size = 5) {
  request({
    url: `/api/columns?currentPage=${page}&pageSize=${size}`
  })
}

export function getColumnDetail (id) {
  request({
    url: `/api/columns/${id}`
  })
}

export function updateColumnDetail (id, data) {
  request({
    url: `/api/columns/${id}`,
    method: 'patch',
    data
  })
}
