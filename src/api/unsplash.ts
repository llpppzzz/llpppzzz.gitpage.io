import http from 'api/index'
const baseUrl = 'https://api.unsplash.com'
const header = {
  'Authorization': 'Client-ID 8060fdb05166c6187578098e99ded43b0226996c3eee1f21d61fe995878b386e'
}

interface GetPhotos {
  page: number,
  pageSize: number
  orderBy?: 'latest' | 'oldest' | 'popular'
}

export default class Unsplash {
  // 图片列表
  /* eslint-disable @typescript-eslint/camelcase */
  static getPhotos (params: GetPhotos) {
    const { page, pageSize, orderBy } = params
    const p = {
      page,
      per_page: pageSize,
      order_by: orderBy
    }
    http().get(baseUrl + '/photos',p ,header)
  }
  /* eslint-enable */
}
