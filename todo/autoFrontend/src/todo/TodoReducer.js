import { LOAD_TODOS, ADD_TODO, UPDATE_DESCRIPTION } from './TodoActions'

const initialState = {
  tarefas: [],
  description: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_TODOS:
      return { ...state, tarefas: payload.data }
    case ADD_TODO:
      return {
        ...state,
        tarefas: [payload.data, ...state.tarefas],
        description: ''
      }
    case UPDATE_DESCRIPTION:
      return { ...state, description: payload }
    default:
      return state
  }
}
