import { defineStore } from 'pinia'

const useApp = defineStore({
  id: 'app',
  state: () => ({
    screenLoading: false
  }),
  actions: {
    startScreenLoading() {
      this.screenLoading = true
    },
    cancelScreenLoading() {
      this.screenLoading = false
    }
  }
})
export { useApp }
