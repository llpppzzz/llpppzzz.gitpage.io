import api from '../index'
import urls from './urls'
import { formatUrl } from '../../common/utils'

export default {
  getUserInfo (id) {
    let url = formatUrl(urls.userInfo, {userId: id})
    return api.get(url)
  }
}
