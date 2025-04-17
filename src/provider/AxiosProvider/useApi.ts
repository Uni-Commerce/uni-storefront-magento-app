import { useCallback } from 'react'
import { AxiosRequestConfig, AxiosResponse } from 'axios'

import { useAxios } from './axiosProvider'

type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete'

interface ApiRequestOptions extends AxiosRequestConfig {
  method: HttpMethod
}

export const useApi = () => {
  const axiosInstance = useAxios()

  const request = useCallback(
    async <T = any>(url: string, options: ApiRequestOptions): Promise<T> => {
      const { method, ...config } = options

      try {
        const response: AxiosResponse<T> = await axiosInstance[method](url, config)
        return response.data
      } catch (error) {
        throw error
      }
    },
    [axiosInstance]
  )

  // 为每个方法创建特定类型的函数
  return {
    get: useCallback(
      <T = any>(url: string, config?: Omit<AxiosRequestConfig, 'method'>) =>
        request<T>(url, { method: 'get', ...config }),
      [request]
    ),
    post: useCallback(
      <T = any>(url: string, data?: any, config?: Omit<AxiosRequestConfig, 'method'>) =>
        request<T>(url, { method: 'post', data, ...config }),
      [request]
    ),
    put: useCallback(
      <T = any>(url: string, data?: any, config?: Omit<AxiosRequestConfig, 'method'>) =>
        request<T>(url, { method: 'put', data, ...config }),
      [request]
    ),
    patch: useCallback(
      <T = any>(url: string, data?: any, config?: Omit<AxiosRequestConfig, 'method'>) =>
        request<T>(url, { method: 'patch', data, ...config }),
      [request]
    ),
    delete: useCallback(
      <T = any>(url: string, config?: Omit<AxiosRequestConfig, 'method'>) =>
        request<T>(url, { method: 'delete', ...config }),
      [request]
    ),
    request
  }
}
