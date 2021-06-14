import request from './requests'

export function createArticle (data) {
  request({
    url: '/api/posts',
    method: 'post',
    data
  })
}

export function getArticleInfo (id) {
  request({
    url: `api/posts/${id}`
  })
}

export function updateArticleInfo (id, data) {
  request({
    url: `api/posts/${id}`,
    method: 'patch',
    data
  })
}

export function deleteArticleInfo (id) {
  request({
    url: `api/posts/${id}`,
    method: 'delete'
  })
}

export function getColumnArticleList (id, page = 1, size = 5) {
  request({
    url: `/api/columns/${id}/posts?currentPage=${page}&pageSize=${size}`
  })
}
