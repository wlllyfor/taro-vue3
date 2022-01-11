import { createApp } from 'vue'
import Taro from '@tarojs/taro'

import { store, useStore } from '@/stores'

import { Icon, Avatar, Button, SearchBar, Cell } from '@nutui/nutui-taro'

import '@nutui/nutui-taro/dist/style.css'
import './app.scss'

const App = createApp({
  onShow() {}
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
App.use(Icon)
App.use(Avatar)
App.use(Button)
App.use(SearchBar)
App.use(Cell)

App.use(store)

const auth = useStore('auth')
const app = useStore('app')

const token = Taro.getStorageSync('token')
if (!token) {
  auth.logout()
} else {
  app.startScreenLoading()
  setTimeout(() => {
    auth.setUserInfo({
      nickName: '林qwe',
      avatarUrl:
        'https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png'
    })
    auth.login()
    app.cancelScreenLoading()
  }, 500)
}

export default App
