import api from '../index'
import urls from './urls'
// import { formatUrl } from '../../common/utils'
const header = {
  'Authorization': 'Client-ID 8060fdb05166c6187578098e99ded43b0226996c3eee1f21d61fe995878b386e'
}

export default {
  viewPhotos (params) {
    return api.get(urls.photos, params, header)
  }
}
