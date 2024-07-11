import type { Todo } from '~/types/api/todo'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<Todo[]>([
    { id: '1', title: 'Learn Vue 3', completed: true },
    { id: '2', title: 'Learn Vite', completed: true },
    { id: '3', title: 'Build something awesome', completed: false },
  ])

  /**
   * TODO: 新增 Todo
   */

  /**
   * TODO: 刪除 Todo
   */

  return {
    todos,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTodoStore, import.meta.hot))
}
