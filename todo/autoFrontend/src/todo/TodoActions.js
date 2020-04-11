import axios from 'axios'
const URL = 'http://localhost:3003/api/todos'

export const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION'
export const updateDescription = e => ({
  type: UPDATE_DESCRIPTION,
  payload: e.target.value
})

export const LOAD_TODOS = 'LOAD_TODOS'
export const loadTodos = _ => {
  const request = axios.get(`${URL}?sort=-createdAt`)
  return {
    type: LOAD_TODOS,
    payload: request
  }
}

export const ADD_TODO = 'ADD_TODO'
export const addTodo = description => {
  const request = axios.post(`${URL}`, { description })
  return {
    type: ADD_TODO,
    payload: request
  }
}
