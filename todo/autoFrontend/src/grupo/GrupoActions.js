export const CRIAR_GRUPO = 'CRIAR_GRUPO'
export const LIMPAR_GRUPOS = 'LIMPAR_GRUPOS'
export const ALTERAR_DESCRICAO = 'ALTERAR_DESCRICAO'
export const ADICIONAR_GRUPO = 'ADICIONAR_GRUPO'

export const criarGrupo = grupo => ({
  type: CRIAR_GRUPO,
  payload: grupo
})

export const limparGrupos = _ => ({
  type: LIMPAR_GRUPOS
})

export const alterarDescricao = eventoDoInput => ({
  type: ALTERAR_DESCRICAO,
  payload: eventoDoInput.target.value
})

export const adicionarGrupo = _ => ({
  type: ADICIONAR_GRUPO
})
