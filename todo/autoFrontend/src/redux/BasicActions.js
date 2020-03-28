export const CRIAR_NOVO_TODO = 'Criar novo todo'
export const criarNovoTodo = todo => ({
    type: CRIAR_NOVO_TODO,
    payload: todo
})

export const LIMPAR_LISTA_TODOS = 'Limpar lista de todos'
export const limparListaTodos = _ => ({
    type: LIMPAR_LISTA_TODOS
})