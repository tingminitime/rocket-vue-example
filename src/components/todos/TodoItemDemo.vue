<!-- TODO: 定義 Props 將 todo 狀態傳進來 -->
<!-- JS -->
<!-- <script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  checked: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['update:checked'])

const checked = defineModel('checked')

function updateChecked(event) {
  emit('update:checked', event.target.checked)
}
</script> -->

<!-- TS -->
<script setup lang="ts">
import type { Todo } from '~/types/api/todo'

defineProps<Omit<Todo, 'completed'>>()

const emit = defineEmits<{
  'update:checked': [value: boolean]
  'deleteTodo': [id: string]
}>()

const checked = defineModel<boolean>('checked')

function updateChecked(event: Event) {
  emit('update:checked', (event.target as HTMLInputElement).checked)
}

function deleteTodoById(id: string) {
  emit('deleteTodo', id)
}
</script>

<template>
  <li
    class="group relative rounded-lg bg-white p-4 transition-colors duration-200 ease-in-out before:absolute before:left-0 before:top-0 before:h-full before:w-[calc(100%+56px)] before:bg-white/0 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
  >
    <div class="relative z-10 flex items-center justify-between">
      <span>{{ title }}</span>

      <input
        type="checkbox"
        :checked
        class="relative size-6 rounded border-gray-300 bg-gray-100 text-blue-600 before:absolute before:-inset-4 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
        @change="updateChecked"
      >
    </div>

    <button
      class="absolute -right-14 top-1/2 block -translate-y-1/2 rounded-lg bg-white p-4 opacity-0 transition-opacity duration-200 ease-in-out hover:bg-red-400 group-hover:opacity-100 dark:bg-gray-600 dark:hover:bg-red-500"
      @click="deleteTodoById(id)"
    >
      <span class="i-carbon-trash-can"></span>
    </button>
  </li>
</template>

<style scope></style>
