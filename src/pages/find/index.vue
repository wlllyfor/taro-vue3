<template>
  <nut-searchbar placeholder="请输入书籍" @click="goSearchPage">
    <template v-slot:leftin>
      <nut-icon size="14" name="search2"></nut-icon>
    </template>
  </nut-searchbar>

  <book-list title="热门精选" :listData="bookListData" @bookClick="handleBookClick" />
</template>

<script lang="ts" setup>
import Taro from '@tarojs/taro'
import BookList from '@/components/bookList.vue'
import { usePullDownRefresh } from '@/hooks/life'
import { ref, onMounted } from 'vue'
import { getBookList } from '@/services/apis/book'

const goSearchPage = () => {
  Taro.navigateTo({ url: '/pages/search/index' })
}

const handleBookClick = id => {
  Taro.navigateTo({ url: `/pagesSub/book/detail/index?id=${id}` })
}

onMounted(() => {
  _getBookList()
})

usePullDownRefresh(() => {
  _getBookList()
})

const bookListData = ref([])
const _getBookList = async () => {
  const res = await getBookList()
  bookListData.value = res.data
}
</script>

<style lang="scss"></style>
