// https://www.51cto.com/article/707156.html

import axios from 'axios'
import './axios.d'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { ElMessage } from 'element-plus'
import { getToken } from '@/utils/token'
import { Base64 } from 'js-base64'

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
        NProgress.start() // 开启 progress bar

        console.log('全局请求拦截器')
        // token判断
        if (getToken()) {
          res.headers = {
            ...res.headers,
            Authorization: Base64.encode(`Bearer${getToken()}`)
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
        NProgress.done() // 关闭 progress bar

        console.log('全局响应拦截器')
        return res.data
      },
      (err: any) => {
        NProgress.done() // 关闭 progress bar

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
