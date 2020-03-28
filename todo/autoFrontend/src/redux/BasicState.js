import { CRIAR_NOVO_TODO, LIMPAR_LISTA_TODOS } from './BasicActions'

const initialState = {
    todos: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case CRIAR_NOVO_TODO:
            const todos = [...state.todos, payload]
            return { ...state, todos }
        case LIMPAR_LISTA_TODOS:
            return { ...state, todos: [] }
        default:
            return state
    }
}
