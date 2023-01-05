// eslint-disable-next-line no-unused-vars
import * as axios from 'axios'

declare module 'axios' {
  interface extField<D = null> {
    code: number
    msg: string
    data: D
    [keys: string]: any
  }
  export interface AxiosResponse extends extField<any> {}
}
