import request from './requests'

export function uploadFile (data) {
  request({
    url: '/api/upload',
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' },
    data
  })
}
