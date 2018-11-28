import api from '../index'
import urls from './urls'
import { formatUrl } from '../../common/utils'

export default {
  login (userId, password) {
    const params = {
      userId,
      password
    }
    return api.post(urls.login, params)
  },
  getUserInfo (id) {
    let url = formatUrl(urls.userInfo, {userId: id})
    return api.get(url)
  }
}
