import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const urlTodo = 'http://localhost:3003/api/todos'

const initialState = {
  description: '',
  refresh: true,
  todoList: []
}
export default _ => {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    if (state.refresh) {
      refresh()
    }
  })

  const handleAdd = () => {

    const description = state.description

    axios.post(urlTodo, { description }).then(response => {
      const newState = { ...state }
      const newTodoList = [...state.todoList, response.data]
      newState.description = ''
      newState.todoList = newTodoList
      setState(newState)
    })

  }

  const refresh = () => {
    axios.get(`${urlTodo}?sort=-createdAt`).then(response => {
      const newState = { ...state }
      newState.todoList = response.data
      console.log(response.data)
      newState.refresh = false
      setState(newState)
    })
  }

  const changeDescription = (description) => {
    const newState = { ...state }
    newState.description = description
    setState(newState)
  }

  return (
    <div>
      <PageHeader name='tarefas' small='cadastro'></PageHeader>
      <TodoForm handleAdd={handleAdd} description={state.description} changeDescription={changeDescription}></TodoForm>
      <TodoList list={state.todoList}></TodoList>
    </div>
  )
}
