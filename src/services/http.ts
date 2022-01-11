// 封装axios的请求，返回重新封装的数据格式
// 对错误的统一处理
import { HttpResponse } from '@/common/interface'
import Taro from '@tarojs/taro'
import publicConfig from '@/config/index'
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  Canceler
} from 'axios-miniprogram'
import errorHandle from '../common/errorHandle'
const CancelToken = axios.CancelToken

class HttpRequest {
  private baseUrl: string
  private pending: Record<string, Canceler>

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
    this.pending = {}
  }

  // 获取axios配置
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      timeout: 10000
    }
    return config
  }

  removePending(key: string, isRequest = false) {
    if (this.pending[key] && isRequest) {
      this.pending[key]('取消重复请求')
    }
    delete this.pending[key]
  }

  // 设定拦截器
  interceptors(instance: AxiosInstance) {
    instance.interceptors.request.use(
      config => {
        console.log('config :>> ', config)
        let isPublic = false
        publicConfig.publicPath.map(path => {
          isPublic = isPublic || path.test(config.url || '')
        })
        const token = Taro.getStorageSync('token')
        if (!isPublic && token) {
          config.headers.Authorization = 'Bearer ' + token
        }
        const key = config.url + '&' + config.method
        this.removePending(key, true)
        config.cancelToken = new CancelToken(c => {
          this.pending[key] = c
        })
        return config
      },
      err => {
        errorHandle(err)
        return Promise.reject(err)
      }
    )

    // 响应请求的拦截器
    instance.interceptors.response.use(
      res => {
        const key = res.config.url + '&' + res.config.method
        this.removePending(key)
        if (res.status === 200) {
          return Promise.resolve(res.data)
        } else {
          return Promise.reject(res)
        }
      },
      err => {
        errorHandle(err)
        return Promise.reject(err)
      }
    )
  }

  // 创建实例
  request(options: AxiosRequestConfig) {
    const instance = axios.create()
    const newOptions = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance)
    return instance(newOptions)
  }

  get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> | Promise<HttpResponse> {
    const options = Object.assign(
      {
        method: 'get',
        url: url
      },
      config
    )
    return this.request(options)
  }

  post(url: string, data?: unknown): Promise<AxiosResponse> | Promise<HttpResponse> {
    return this.request({
      method: 'post',
      url: url,
      data: data
    })
  }
}

export default HttpRequest
