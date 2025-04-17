import type {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig
} from 'axios'

export const axiosConfig: AxiosRequestConfig = {
  baseURL: '',
  timeout: 5000
}

export const requestHandler = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  console.info('Request:', config.method?.toUpperCase(), config.url)
  return config
}

export const responseHandler = (response: AxiosResponse) => {
  console.info('Response:', response.status, response.config.url)
  return response
}

export const errorHandler = (error: AxiosError) => {
  // 可以在这里处理特定错误，如 token 过期等
  if (error.response?.status === 401) {
    // 处理未授权错误
    console.log('Unauthorized, redirecting to login...')
    // 这里可以添加导航逻辑
  }
  return Promise.reject(error)
}
