<!-- TODO: 將 `message` 狀態與子元件 input 雙向綁定 -->
<script setup lang="ts">
const message = ref('來自祖父元件的訊息')
</script>

<template>
  <div class="rounded border-2 border-sky-600 bg-sky-100 px-8 py-4 dark:border-sky-300 dark:bg-sky-700">
    祖父元件
    <input
      v-model="message"
      type="text"
      class="mt-2 w-full rounded border-2 border-gray-400 px-2 py-1 text-gray-900"
    >
    <Parent />
  </div>
</template>

<style scope></style>
