import request from '@/request'

export function getUserInfo(userId: string) {
  return request({
    method: 'get',
    url: '/api/user/info',
    params: {
      userId
    }
  })
}
