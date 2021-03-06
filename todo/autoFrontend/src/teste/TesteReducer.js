import { TESTE_ATUALIZAR_VALOR } from './TesteActions'

const initialState = {
  valor: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TESTE_ATUALIZAR_VALOR:
      return { ...state, valor: payload }
    default:
      return state
  }
}
