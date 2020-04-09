import axios from 'axios'

export const LOAD_TODOS = 'LOAD_TODOS'
const URL = 'http://localhost:3003/api/todos'
export const loadTodos = _ => {
  const request = axios.get(`${URL}?sort=-createdAt`)
  return {
    type: LOAD_TODOS,
    payload: request
  }
}
