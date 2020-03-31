import {
  CRIAR_GRUPO,
  LIMPAR_GRUPOS,
  ALTERAR_DESCRICAO,
  ADICIONAR_GRUPO
} from './GrupoActions'

const initialState = {
  grupos: ['grupo1', 'grupo2'],
  descricao: 'testeredux'
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CRIAR_GRUPO:
      const grupos = [...state.grupos, payload]
      return { ...state, grupos }

    case LIMPAR_GRUPOS:
      return { ...state, grupos: [] }

    case ALTERAR_DESCRICAO:
      return { ...state, descricao: payload }

    case ADICIONAR_GRUPO:
      return {
        ...state,
        descricao: '',
        grupos: [...state.grupos, state.descricao]
      }
    default:
      return state
  }
}
