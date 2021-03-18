const tokenName = 'xxx_token';

export function setToken(token) {
  return localStorage.setItem(tokenName, token);
}

export function getToken() {
  return localStorage.getItem(tokenName) || '';
}