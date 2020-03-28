import {
  CRIAR_TODO,
  DELETAR_TODO,
  MARCAR_DONE_TODO,
  MARCAR_PENDING_TODO,
  ATUALIZAR_DESCRIPTION
} from './TodoActions'

const initialState = {
  todos: [],
  description: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CRIAR_TODO:
      return {
        ...state,
        todos: [...state.todos, newTodo(state.description)],
        description: ''
      }

    case ATUALIZAR_DESCRIPTION:
      return {
        ...state,
        description: payload
      }

    case DELETAR_TODO:
      return deletarTodo(state, payload)
    case MARCAR_DONE_TODO:
      return marcarComoDone(state, payload)
    case MARCAR_PENDING_TODO:
      return marcarComoPending(state, payload)
    default:
      return state
  }
}
let count = 1
let done = false

const newTodo = description => ({
  _id: count++,
  description,
  done
})
const deletarTodo = (state, _id) => {
  const todos = state.todos.filter(todo => todo._id !== _id)
  return { ...state, todos }
}
const marcarComoDone = (state, _id) => {
  const todos = state.todos.map(todo => {
    return todo._id === _id ? { ...todo, done: true } : todo
  })
  return { ...state, todos }
}
const marcarComoPending = (state, _id) => {
  const todos = state.todos.map(todo => {
    return todo._id === _id ? { ...todo, done: false } : todo
  })
  return { ...state, todos }
}
