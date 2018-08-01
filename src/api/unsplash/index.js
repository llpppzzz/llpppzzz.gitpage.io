import api from '../index'
import urls from './urls'
// import { formatUrl } from '../../common/utils'

export default {
  viewPhotos () {
    return api.get(urls.photos)
  }
}
