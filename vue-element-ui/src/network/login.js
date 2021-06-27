import { request } from './request'

export function UserLogin() {
  return request({
    url: '/login'
  })
}