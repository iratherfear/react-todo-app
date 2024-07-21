import { apiClient } from "./ApiClient"

export const retrieveHelloWorldBean = () => apiClient.get('/hello-world-bean')
export function retrieveHelloWorldPathVariable(username, token) {
    return apiClient.get(`/hello-world-bean/${username}`)
}

export const executeBasicAuthenticateService  = (token) => apiClient.get('/basicauth', {
    headers: {
        Authorization: token
    }
})