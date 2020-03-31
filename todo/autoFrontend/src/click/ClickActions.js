export const CLICADO = 'CLICADO'
export const ATUALIZAR_O_TITULO = 'ATUALIZAR_O_TITULO'
export const RESETAR = 'RESETAR'

export const clicado = () => ({
  type: CLICADO
})

export const atualizarOTitulo = titulo => ({
  type: ATUALIZAR_O_TITULO,
  payload: titulo
})

export const resetar = _ => ({
  type: RESETAR
})
