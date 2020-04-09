import { LOAD_TODOS } from './TodoActions'

const initialState = {
  tarefas: [],
  descricao: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_TODOS:
      return { ...state, tarefas: payload.data }
    default:
      return state
  }
}
