export const useUserStore = defineStore('user', () => {
  // write here

  return {
    // write here
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
