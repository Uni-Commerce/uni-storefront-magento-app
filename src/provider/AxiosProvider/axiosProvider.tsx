import { createContext, useContext, useMemo } from 'react'
import axios from 'axios'
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig
} from 'axios'

interface AxiosProviderProps {
  config?: AxiosRequestConfig
  requestInterceptors?: Array<
    (
      config: InternalAxiosRequestConfig
    ) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>
  >
  responseInterceptors?: Array<(response: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>>
  errorInterceptors?: Array<(error: AxiosError) => Promise<never>>
  children: React.ReactNode
}

interface AxiosContextValue {
  axiosInstance: AxiosInstance
}

const AxiosContext = createContext<AxiosContextValue | null>(null)

const AxiosProvider: React.FC<AxiosProviderProps> = ({
  config = {},
  requestInterceptors = [],
  responseInterceptors = [],
  errorInterceptors = [],
  children
}) => {
  const axiosInstance = useMemo(() => {
    const instance = axios.create({
      baseURL: 'https://api.example.com',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      },
      ...config
    })

    // 添加请求拦截器
    requestInterceptors.forEach((interceptor) => {
      instance.interceptors.request.use(interceptor)
    })

    // 添加响应拦截器
    responseInterceptors.forEach((interceptor) => {
      instance.interceptors.response.use(interceptor)
    })

    // 添加错误拦截器
    errorInterceptors.forEach((interceptor) => {
      instance.interceptors.response.use(undefined, interceptor)
    })

    // 默认错误处理
    instance.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        if (error.response) {
          console.error('Response error:', error.response.status, error.response.data)
        } else if (error.request) {
          console.error('Request error:', error.request)
        } else {
          console.error('Error:', error.message)
        }
        return Promise.reject(error)
      }
    )

    return instance
  }, [config, requestInterceptors, responseInterceptors, errorInterceptors])

  return <AxiosContext.Provider value={{ axiosInstance }}>{children}</AxiosContext.Provider>
}

export default AxiosProvider

export const useAxios = () => {
  const context = useContext(AxiosContext)

  if (!context) {
    throw new Error('useAxios must be used within an AxiosProvider')
  }

  return context.axiosInstance
}
