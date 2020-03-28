import {
  CRIAR_TODO,
  DELETAR_TODO,
  MARCAR_DONE_TODO,
  MARCAR_PENDING_TODO
} from './TodoActions'

const initialState = {
  todos: [
    {
      _id: 1,
      description: 'Pagar Fatura do Cartão',
      done: true
    }
  ],
  description: 'Ler Livro'
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CRIAR_TODO:
      return {
        ...state,
        todos: [...state.todos, { _id: 2, description: payload, done: false }]
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

const deletarTodo = (state, _id) => {
  const todos = state.todos.filter(todo => todo._id !== _id)
  return { ...state, todos }
}
const marcarComoDone = (state, _id) => {}
const marcarComoPending = (state, _id) => {}
