<template>
  <header-detail :bookDetailData="bookDetailData" />
</template>

<script lang="ts" setup>
import Taro from '@tarojs/taro'
import headerDetail from './headerDetail.vue'

import { getBookDetail } from '@/services/apis/book'

import { onMounted, ref } from 'vue'
import { usePullDownRefresh } from '@/hooks/life'

onMounted(() => {
  _getBookDetai()
})

usePullDownRefresh(() => {
  _getBookDetai()
})

const bookDetailData = ref({
  id: '',
  title: '',
  author: '',
  novelType: {
    label: '',
    value: 1
  },
  maker: '',
  coverUrl: '',
  intro: ''
})
const _getBookDetai = async () => {
  const id = Taro.getCurrentInstance().router?.params.id
  const res = await getBookDetail(id)
  bookDetailData.value = res.data
}
</script>

<style lang="scss"></style>
