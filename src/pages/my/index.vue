<template>
  <main v-if="isLogin" class="my-container">
    <user-info />
  </main>
  <main v-else>
    <nut-button type="primary" @click="handleLogin">微信一键登录</nut-button>
  </main>
</template>

<script lang="ts" setup>
import Taro from '@tarojs/taro'
import { computed } from 'vue'
import { useStore } from '@/stores'

import UserInfo from './userInfo.vue'

const auth = useStore('auth')
const isLogin = computed(() => auth.isLogin)

const handleLogin = () => {
  setTimeout(() => {
    // 模拟后端请求得到token和userInfo
    Taro.setStorageSync('token', 'xxxx')
    auth.setUserInfo({
      nickName: '林qwe',
      avatarUrl:
        'https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png'
    })
    auth.login()
  }, 500)
}
</script>

<style lang="scss">
.my-container {
  padding: 0 15px;
}
</style>
