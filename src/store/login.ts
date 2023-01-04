import { defineStore } from 'pinia'
import md5 from 'js-md5'
import { ElMessage } from 'element-plus'
import { getToken, setToken } from '@/utils/token'
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
        loginByEmail({ email, password: md5(password) })
          .then(res => {
            const { code, msg, data } = res
            if (code !== 200) throw msg

            this.token = data.token
            setToken(data.token)

            resolve()
          })
          .catch(err => {
            ElMessage.error(`${err}`)
            reject(err)
          })
      })
    }
  }
})