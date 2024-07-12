<script setup lang="ts">
const message = defineModel<string>({ default: 'default message' })

// const message = inject('message') as Ref<string>
// const updateMessage = inject('updateMessage') as (newMessage: string) => void

// function inputHandler(event: Event) {
//   const target = event.target as HTMLInputElement
//   updateMessage(target.value)
// }
</script>

<template>
  <div class="my-2 flex flex-col justify-center rounded border-2 border-teal-600 bg-teal-100 px-8 py-4 dark:border-teal-300 dark:bg-teal-700">
    子元件
    <input
      v-model="message"
      type="text"
      class="mt-2 w-full rounded border-2 border-gray-400 px-2 py-1 text-gray-900"
    >
    <!-- <input
      :value="message"
      type="text"
      class="mt-2 w-full rounded border-2 border-gray-400 px-2 py-1 text-gray-900"
      @input="inputHandler"
    > -->
  </div>
</template>

<style scope></style>
