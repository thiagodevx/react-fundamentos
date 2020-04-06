import { SET_TAREFAS, SET_DESCRICAO } from './TodoActions'

const initialState = {
  tarefas: [],
  descricao: '',
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TAREFAS:
      return { ...state, tarefas: payload }
    case SET_DESCRICAO:
      return { ...state, descricao: payload }
    default:
      return state
  }
}
