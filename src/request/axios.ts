// https://www.51cto.com/article/707156.html

import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { ElMessage } from 'element-plus'
import { getToken } from '@/utils/token'

// NProgress 配置
NProgress.configure({
  showSpinner: false
})

class Request {
  public instance: AxiosInstance

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)

    // 请求拦截
    this.instance.interceptors.request.use(
      (res: AxiosRequestConfig) => {
        // 开启 progress bar
        NProgress.start()
        console.log('全局请求拦截器')

        if (getToken()) {
          res.headers = {
            ...res.headers,
            Authorization: `Bearer${getToken()}`
          }
        }

        return res
      },
      (err: any) => {
        return Promise.reject(err)
      }
    )

    // 响应拦截
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        // 关闭 progress bar
        NProgress.done()
        console.log('全局响应拦截器')
        return res
      },
      (err: any) => {
        // 关闭 progress bar
        NProgress.done()

        if (err.response?.data) {
          const { code, msg } = err.response.data
          ElMessage.error(`code: ${code} , message: ${msg}`)
        } else {
          ElMessage.error(`${err}`)
        }

        return Promise.reject(err)
      }
    )
  }
}

export default Request
