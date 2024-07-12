<script setup lang="ts">
const message = ref('來自祖父元件的訊息')

// function updateMessage(newMessage: string) {
//   message.value = newMessage
// }

// provide('message', message)
// provide('updateMessage', updateMessage)
</script>

<template>
  <div class="rounded border-2 border-sky-600 bg-sky-100 px-8 py-4 dark:border-sky-300 dark:bg-sky-700">
    祖父元件
    <input
      v-model="message"
      type="text"
      class="mt-2 w-full rounded border-2 border-gray-400 px-2 py-1 text-gray-900"
    >
    <ParentDemo v-model="message" />
    <!-- <Parent v-model="message" /> -->
  </div>
</template>

<style scope></style>
