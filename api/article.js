import { request } from '@/plugins/request'

// 获取文章列表
export const getArticles  = params => {
  return request({
    method: 'GET',
    url: '/api/articles',
    params
  })
}

// 获取关注文章列表
export const getYourFeedArticles = params => {
  return request({
    method: 'GET',
    url: '/api/articles/feed',
    params
  })
}

// 添加点赞
export const addFavorite = slug => {
  return request({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  })
}

// 取消点赞
export const deleteFavorite = slug => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  })
}

// 获取文章详情
export const getArticle = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}`
  })
}

// 获取文章评论
export const getComments = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  })
}

// 删除文章评论
export const deleteComment = (slug, commentId) => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}/comments/${commentId}`
  })
}

// 添加文章评论
export const addComment = (slug, comment) => {
  return request({
    method: 'POST',
    url: `/api/articles/${slug}/comments`,
    data: { comment }
  })
}

// 订阅作者
export const addFollow = username => {
  return request({
    method: 'POST',
    url: `/api/profiles/${username}/follow`
  })
}

// 取消订阅
export const deleteFollow = username => {
  return request({
    method: 'DELETE',
    url: `/api/profiles/${username}/follow`
  })
}

// 发布文章
export const addArticle = article => {
  return request({
    method: 'POST',
    url: '/api/articles',
    data: { article }
  })
}

// 编辑文章
export const editArticle = (slug, article) => {
  return request({
    method: 'PUT',
    url: `/api/articles/${slug}`,
    data: article
  })
}

// 删除文章
export const deleteArticle = slug => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}`
  })
}
