import axios from 'axios'

export const SET_TAREFAS = 'SET_TAREFAS'
export const SET_DESCRICAO = 'SET_DESCRICAO'

export const setTarefas = tarefas => ({
  type: SET_TAREFAS,
  payload: tarefas,
})

export const setDescricao = descricao => ({
  type: SET_DESCRICAO,
  payload: descricao,
})
