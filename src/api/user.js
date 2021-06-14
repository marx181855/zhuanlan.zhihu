import request from './requests'

export function register (data) {
  request({
    url: '/api/user/login',
    method: 'post',
    data
  })
}

export function login (data) {
  request({
    url: '/api/user/login',
    method: 'post',
    data
  })
}

export function getUserInfo () {
  request({
    url: '/api/user/current'
  })
}

export function updateUserInfo (id, data) {
  request({
    url: `/api/user/${id}`,
    method: 'patch',
    data
  })
}
