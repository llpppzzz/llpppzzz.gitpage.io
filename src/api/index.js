import axios from './axios'
import settle from 'axios/lib/core/settle'

let instance = axios()

export default {
  /**
   * 使用 API Mock
   * @param mockUrl [.json 路径]
   * @param status [HTTP 状态] 默认是 200
   * @param times [响应时间] 默认是 200 ms
   * @return {mock}
   */
  mock (mockUrl, status, times) {
    /**
     * 仅开发模式或测试环境，允许 API Mock
     * 手动设置 isMock 为 true
     */
    instance.interceptors.request.use(config => {
      config.adapter = async (_config) => {
        let mockData = await import(/* webpackMode: 'lazy-once', webpackChunkName: 'api-mock' */ './mock/' + mockUrl)
        const response = {
          data: mockData,
          config: _config,
          status: status || 200
        }
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            settle(resolve, reject, response)
          }, times || 200)
        })
      }
      return config
    }, error => {
      return Promise.reject(error)
    })
    return this
  },
  get (url, params, headers) {
    let options = {}
    if (params) {
      options.params = params
    }
    if (headers) {
      options.headers = headers
    }
    return instance.get(url, options)
  },
  post (url, params, headers) {
    let options = {}
    if (headers) {
      options.headers = headers
    }
    return instance.post(url, params, options)
  },
  put  (url, params, headers) {
    let options = {}
    if (headers) {
      options.headers = headers
    }
    return instance.put(url, params, options)
  },
  delete (url, params, headers) {
    let options = {}
    if (params) {
      options.params = params
    }
    if (headers) {
      options.headers = headers
    }
    return instance.delete(url, options)
  }
}
