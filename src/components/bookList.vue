<template>
  <article class="book-list">
    <enter-view :title="props.title">
      <section class="list-content">
        <article
          class="book-item"
          v-for="book in props.listData"
          :key="book.id"
          @click="handleBookClick(book.id)"
        >
          <img :src="book.coverUrl" />
          <p class="book-title">{{ book.title }}</p>
          <p>{{ book.maker }}</p>
        </article>
      </section>
    </enter-view>
  </article>
</template>

<script lang="ts" setup>
import enterView from './basic/enterView.vue'

interface Props {
  title: string
  listData: BookItem[]
}

interface BookItem {
  id: string
  coverUrl: string
  title: string
  maker: string
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  listData: () => []
})

const emit = defineEmits(['bookClick'])

const handleBookClick = id => {
  emit('bookClick', id)
}
</script>

<style lang="scss">
$bookWidth: 74px;
.book-list {
  margin: 10px 15px 0;
  padding-top: 10px;
  border-top: 1px solid #f1f1f1;
  .list-content {
    margin-top: 10px;
    display: flex;
    width: 345px;
    flex-wrap: wrap;
    .book-item {
      width: $bookWidth;
      margin: 0 15px 20px 0;
      img {
        width: $bookWidth;
        height: $bookWidth * 1.33;
      }
      p {
        color: #999999;
        font-size: 12px;
        margin-top: 4px;
      }
      .book-title {
        color: #666666;
      }
    }
  }
  .list-content :nth-child(4n) {
    margin-right: 0;
  }
}
</style>
