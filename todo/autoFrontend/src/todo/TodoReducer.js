import { CRIAR_TODO } from './TodoActions'

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
    default:
      return state
  }
}
