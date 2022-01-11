<template>
  <nut-button type="primary" @click="handleLogout">退出登录</nut-button>
</template>

<script lang="ts" setup>
import Taro from '@tarojs/taro'
import { useStore } from '@/stores'

const auth = useStore('auth')
const handleLogout = () => {
  Taro.clearStorageSync()
  auth.logout()
  Taro.reLaunch({ url: '/pages/my/index' })
}
</script>

<style lang="scss"></style>
