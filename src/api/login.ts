import request from '@/request'

export function loginByEmail(data: { email: string; password: string }) {
  return request({
    method: 'post',
    url: '/api/user/login',
    data
  })
}
