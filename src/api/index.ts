import { AxiosPromise } from 'axios'
import axios from './axios'

interface Option {
  params?: any,
  headers?: any
}

/**
 * API 公共请求模块
 * 当 wealth.apiMock 为 true 时，则全局启用 API Mock
 * @return {Object}
 */
export default function () {
  const instance = axios
  return {
    /**
     * get 请求
     * @param url [请求地址]
     * @param params [请求参数] 非必传
     * @param headers [请求头部] 非必传
     */
    get (url: string, params: any, headers: any): AxiosPromise {
      let options: Option = {}
      if (params) {
        options.params = params
      }
      if (headers) {
        options.headers = headers
      }
      return instance.get(url, options)
    },

    /**
     * post 请求
     * @param url [请求地址]
     * @param params [请求参数] 非必传
     * @param headers [请求头部] 非必传
     */
    post (url: string, params: any, headers: any): AxiosPromise {
      let options: Option = {}
      if (headers) {
        options.headers = headers
      }
      return instance.post(url, params, options)
    },

    /**
     * put 请求
     * @param url [请求地址]
     * @param params [请求参数] 非必传
     * @param headers [请求头部] 非必传
     */
    put  (url: string, params: any, headers: any): AxiosPromise {
      let options: Option = {}
      if (headers) {
        options.headers = headers
      }
      return instance.put(url, params, options)
    },

    /**
     * delete 请求
     * @param url [请求地址]
     * @param params [请求参数] 非必传
     * @param headers [请求头部] 非必传
     */
    delete (url: string, params: any, headers: any): AxiosPromise {
      let options: Option = {}
      if (params) {
        options.params = params
      }
      if (headers) {
        options.headers = headers
      }
      return instance.delete(url, options)
    }
  }
}
