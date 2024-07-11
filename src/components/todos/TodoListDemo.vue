<!-- JS -->
<!-- <script setup>
const todos = ref([
  { id: '1', title: 'Learn Vue 3', completed: true },
  { id: '2', title: 'Learn Vite', completed: true },
  { id: '3', title: 'Build something awesome', completed: false },
])
</script> -->

<!-- TS -->
<script setup lang="ts">
import type { Todo } from '~/types/api/todo'

const todos = ref<Todo[]>([
  { id: '1', title: 'Learn Vue 3', completed: true },
  { id: '2', title: 'Learn Vite', completed: true },
  { id: '3', title: 'Build something awesome', completed: false },
])
</script>

<template>
  <div class="mb-4">
    <input
      type="text"
      placeholder="Press Enter to add a new todo"
      class="w-full rounded border px-4 py-2 placeholder:text-gray-300 dark:bg-gray-600"
    >
  </div>

  <ul class="space-y-2">
    <!-- TODO: 嘗試使用 `v-for` 搭配 `v-bind` 將 todo 物件一次傳入 -->
    <TodoItemDemo
      v-for="todo in todos"
      :id="todo.id"
      :key="todo.id"
      v-model:checked="todo.completed"
      :title="todo.title"
    />
  </ul>
</template>

<style scope></style>
