import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios'
import { API_REQUEST_TIMEOUT, STATUS_NETWOEK_ERROR, STATUS_UNAUTHORIZED, API_REQUEST_CONTENT_TYPE } from '@/utils/constant'
import router from '@/router'

interface ErrorInfo<T = any> {
  code: number,
  data?: T,
  msg: string
}

/** 编辑器接口地址 */
const editorInstance: AxiosInstance = axios.create({
  timeout: API_REQUEST_TIMEOUT
})

// 设置 post、put 默认 Content-Type
editorInstance.defaults.headers.post['Content-Type'] = API_REQUEST_CONTENT_TYPE
editorInstance.defaults.headers.put['Content-Type'] = API_REQUEST_CONTENT_TYPE
// 添加请求拦截器
editorInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  if (config.method === 'post' || config.method === 'put') {
    // post、put 提交时，将对象转换为string, 为处理Java后台解析问题
    if (config.data && config.data.constructor === FormData) {
      // formdata 不需要任何处理
    } else {
      config.data = JSON.stringify(config.data)
    }
  }
  // 请求发送前进行处理
  return config
}, (error: AxiosError) => {
  // 请求错误处理
  return Promise.reject(error)
})

// 添加响应拦截器
editorInstance.interceptors.response.use((response: AxiosResponse) => {
  // 返回的 status 统一再这里处理
  const { data } = response
  console.log(data)
  return data
}, (error: AxiosError) => {
  // 响应错误处理
  let info: ErrorInfo
  if (!error.response) {
    info = {
      code: STATUS_NETWOEK_ERROR,
      msg: 'Network Error'
    }
  } else {
    const { response } = error
    const { status, statusText, data, config } = response
    // token 失效则跳转到登录页面
    // checkauth、permission/check 接口交由其自己处理
    if (status === STATUS_UNAUTHORIZED && config.url !== '/api/checkauth' && config.url !== '/api/permission/check') {
      info = {
        code: STATUS_UNAUTHORIZED,
        msg: '用户登录状态失效'
      }
      router.replace({
        name: 'login'
      })
    } else {
      info = {
        code: status,
        data: data,
        msg: statusText
      }
    }
  }
  return Promise.reject(info)
})

export default editorInstance
