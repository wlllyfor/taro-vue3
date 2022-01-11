import HttpRequest from './http'
import config from '@/config/index'
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

const request = new HttpRequest(baseUrl)

export default request
