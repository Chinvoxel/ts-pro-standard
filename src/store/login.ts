import { defineStore } from 'pinia'
import CryptoJS from 'crypto-js'
import { getToken, setToken, removeToken } from '@/utils/token'
import { loginByEmail } from '@/api/login'

interface loginForm {
  email: string
  password: string
}

export const useLoginStore = defineStore('login', {
  state: () => ({
    token: getToken()
  }),
  actions: {
    LoginByEmail({ email, password }: loginForm): Promise<void> {
      return new Promise((resolve, reject) => {
        loginByEmail({ email, password: CryptoJS.MD5(password).toString() })
          .then(res => {
            const { code, msg, data } = res
            if (code !== 200) throw msg

            this.token = data.token
            setToken(data.token)

            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    },

    FedLogOut(): Promise<void> {
      return new Promise(resolve => {
        this.token = ''
        removeToken()
        resolve()
      })
    }
  }
})
