import { CLICADO, ATUALIZAR_O_TITULO, RESETAR } from './ClickActions'

const initialState = {
  valor: 0,
  titulo: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CLICADO:
      return { ...state, valor: state.valor + 1 }
    case ATUALIZAR_O_TITULO:
      const titulo = action.payload
      return { ...state, titulo }
    case RESETAR:
      return initialState
    default:
      return state
  }
}
