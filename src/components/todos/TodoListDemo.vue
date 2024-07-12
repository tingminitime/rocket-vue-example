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

function newTodo(title: string) {
  return {
    id: crypto.randomUUID(),
    title,
    completed: false,
  }
}

function addTodoHandler(title: string) {
  console.log('[addTodoHandler]', title)
  if (!title.trim())
    return
  todos.value.push(newTodo(title.trim()))
}

function deleteTodoHandler(id: string) {
  console.log('[deleteTodoById]', id)
  todos.value = todos.value.filter(todo => todo.id !== id)
}
</script>

<template>
  <div class="mb-4">
    <input
      type="text"
      placeholder="Press Enter to add a new todo"
      class="w-full rounded border px-4 py-2 placeholder:text-gray-300 dark:bg-gray-600"
      @keydown.enter="addTodoHandler(($event.target as HTMLInputElement).value)"
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
      @delete-todo="deleteTodoHandler"
    />
  </ul>
</template>

<style scope></style>
