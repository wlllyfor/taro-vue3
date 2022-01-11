<template>
  <section class="enter-view" @click="handlePathChange">
    <span class="title" :style="{ 'font-size': fontSize }">{{ props.title }}</span>
    <nut-icon class="icon" name="right" size="12"></nut-icon>
  </section>
  <slot></slot>
</template>

<script lang="ts" setup>
import Taro from '@tarojs/taro'

const props = defineProps<{
  title: string
  fontSize?: string
  jumpUrl?: string
}>()

const handlePathChange = () => {
  if (props.jumpUrl) {
    Taro.navigateTo({ url: props.jumpUrl })
  }
}
</script>

<style lang="scss">
.enter-view {
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title {
    font-size: 18px;
    color: #333333;
  }
  .icon {
    margin-right: 10px;
  }
}
.enter-view:active {
  background-color: #f9f9f9;
}
</style>
