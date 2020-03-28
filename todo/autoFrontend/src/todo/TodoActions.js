export const CRIAR_TODO = 'CRIAR_TODO'
export const DELETAR_TODO = 'DELETAR_TODO'
export const MARCAR_DONE_TODO = 'MARCAR_DONE_TODO'
export const MARCAR_PENDING_TODO = 'MARCAR_PENDING_TODO'
export const ATUALIZAR_DESCRIPTION = 'ATUALIZAR_DESCRIPTION'

export const limparDescription = _ => ({
  type: ATUALIZAR_DESCRIPTION,
  payload: ''
})
export const atualizarDescription = e => ({
  type: ATUALIZAR_DESCRIPTION,
  payload: e.target.value
})
export const criarTarefa = tarefa => ({
  type: CRIAR_TODO,
  payload: tarefa
})

export const deletarTarefa = _id => ({
  type: DELETAR_TODO,
  payload: _id
})

export const marcarTarefaComDone = _id => ({
  type: MARCAR_DONE_TODO,
  payload: _id
})

export const marcarTarefaComPending = _id => ({
  type: MARCAR_PENDING_TODO,
  payload: _id
})
