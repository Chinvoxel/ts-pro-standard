import request from '@/request/index'

export function getUserInfo(userId: string) {
  return request({
    method: 'get',
    url: '/api/user/info',
    params: {
      userId
    }
  })
}
