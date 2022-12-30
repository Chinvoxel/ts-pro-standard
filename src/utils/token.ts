const TokenKey = 'saber-access-token'
const RefreshTokenKey = 'saber-refresh-token'

export function getToken(): string | null {
  return localStorage.getItem(TokenKey)
}

export function setToken(token: string) {
  localStorage.setItem(TokenKey, token)
}

export function removeToken() {
  localStorage.removeItem(TokenKey)
}

export function getRefreshToken(): string | null {
  return localStorage.getItem(RefreshTokenKey)
}

export function setRefreshToken(token: string) {
  localStorage.setItem(RefreshTokenKey, token)
}

export function removeRefreshToken() {
  localStorage.removeItem(RefreshTokenKey)
}
