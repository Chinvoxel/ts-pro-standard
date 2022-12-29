import Request from './axios'

const request = new Request({
  baseURL: '/',
  timeout: 600000, // 默认超时时间
  withCredentials: true // 跨域请求，允许保存cookie
})

export default request.instance
