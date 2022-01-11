import { createPinia } from 'pinia'
import { useAuth } from './auth'
import { useApp } from './app'

export const store = createPinia()

const storeObj = {
  auth: useAuth,
  app: useApp
}

// 封装成useStore的形式，这样一看引用就知道是store的数据
export function useStore(key: string) {
  return storeObj[key]()
}
