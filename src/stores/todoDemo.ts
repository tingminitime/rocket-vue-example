import type { Todo } from '~/types/api/todo'

export const useTodoDemoStore = defineStore('todo', () => {
  const initTodos = () => ([
    { id: '1', title: 'Learn Vue 3', completed: true },
    { id: '2', title: 'Learn Vite', completed: true },
    { id: '3', title: 'Build something awesome', completed: false },
  ])

  const todos = ref<Todo[]>(initTodos())

  const newTodo = (title: string) => {
    return {
      id: crypto.randomUUID(),
      title,
      completed: false,
    }
  }

  /**
   * Reset todos
   */
  function $reset() {
    todos.value = initTodos()
  }

  /**
   * TODO: 新增 Todo
   */
  function addTodo(title: string) {
    if (!title || !title.trim())
      return
    todos.value.push(newTodo(title.trim()))
  }

  /**
   * TODO: 刪除 Todo
   */
  function deleteTodoById(id: string) {
    todos.value = todos.value.filter(todo => todo.id !== id)
  }

  return {
    todos,
    addTodo,
    deleteTodoById,
    $reset,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTodoDemoStore, import.meta.hot))
}
