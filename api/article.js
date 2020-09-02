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
