import axios from 'axios'

// 创建 axios 实例
let http = axios.create({
  // headers: {'X-Custom-Header': 'foobar'},
  timeout: 60000
})

// 添加响应拦截器
http.interceptors.response.use(response => {
  let {data} = response
  return data
}, error => {
  let info = {}
  let {status, statusText, data} = error.response
  if (!error.response) {
    info = {
      code: 5000,
      msg: 'Network Error'
    }
  } else {
    info = {
      code: status,
      data: data,
      msg: statusText
    }
  }
  return Promise.reject(info)
})

/**
 * 创建统一封装过的 axios 实例
 * @return {AxiosInstance}
 */
export default function () {
  return http
}
