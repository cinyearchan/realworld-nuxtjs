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
