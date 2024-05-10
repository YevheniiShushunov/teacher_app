export function setToken(token: string) {
    return localStorage.setItem('access', token)
}

export function removeToken() {
    return localStorage.removeItem('access');
}

export function getToken() {
    return localStorage.getItem('access');
}