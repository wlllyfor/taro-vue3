<template>
  <article class="book-detail-header">
    <img :src="props.bookDetailData.coverUrl" />
    <p class="title">{{ props.bookDetailData.title }}</p>
    <p class="sub-title">{{ authorAndType }}</p>
    <p class="sub-title">{{ `整理: ${props.bookDetailData.maker}` }}</p>
  </article>
  <section @click="handleIntroClick" class="book-detail-intro">
    <p :class="{ 'multi-ellipsis--l3': !introExpand }">{{ props.bookDetailData.intro }}</p>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { computed } from 'vue'

interface BookDetailProp {
  id: string
  title: string
  author: string
  novelType: {
    label: string
    value: number
  }
  maker: string
  coverUrl: string
  intro: string
}

const props = defineProps<{
  bookDetailData: BookDetailProp
}>()

const authorAndType = computed(
  () => `${props.bookDetailData.author}  ${props.bookDetailData.novelType?.label}`
)

const introExpand = ref<boolean>(false)

const handleIntroClick = () => {
  introExpand.value = !introExpand.value
}
</script>

<style lang="scss">
$bookWidth: 110px;
.book-detail-header {
  width: 100vw;
  height: 240px;
  background-color: #e6eaeb;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-top: 10px;
    width: $bookWidth;
    height: $bookWidth * 1.33;
  }
  .title {
    font-size: 20px;
    margin-top: 8px;
  }
  .sub-title {
    font-size: 12px;
    margin-top: 4px;
  }
}
.book-detail-intro {
  padding: 10px 10px;
  border-bottom: 1px solid #f1f1f1;
  color: #777777;
  font-size: 13px;
  letter-spacing: 2px;
}
</style>
