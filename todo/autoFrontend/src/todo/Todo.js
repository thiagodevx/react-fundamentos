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
      const todoList = [...state.todoList, response.data]
      const description = ''
      setState({ ...state, description, todoList })
    })
  }

  const markAsDone = _id => {
    axios.put(`${urlTodo}/${_id}`, { done: true }).then(response => {
      const index = state.todoList.findIndex(todo => todo._id === _id)
      const todoList = [...state.todoList]
      todoList[index] = response.data
      setState({ ...state, todoList })
    })
  }

  const markAsPending = _id => {
    axios.put(`${urlTodo}/${_id}`, { done: false }).then(response => {
      const index = state.todoList.findIndex(todo => todo._id === _id)
      const todoList = [...state.todoList]
      todoList[index] = response.data
      setState({ ...state, todoList })
    })
  }

  const remove = _id => {
    axios.delete(`${urlTodo}/${_id}`).then(() => {
      const todoList = state.todoList.filter(todo => todo._id !== _id)
      setState({ ...state, todoList })
    })
  }

  const refresh = () => {
    axios.get(`${urlTodo}?sort=-createdAt`).then(response => {
      const todoList = response.data
      const refresh = false
      setState({ ...state, todoList, refresh })
    })
  }

  const changeDescription = description => {
    setState({ ...state, description })
  }

  return (
    <div>
      <PageHeader name='tarefas' small='cadastro'></PageHeader>
      <TodoForm handleAdd={handleAdd} description={state.description} changeDescription={changeDescription}></TodoForm>
      <TodoList
        list={state.todoList}
        handleRemove={remove}
        markAsDone={markAsDone}
        markAsPending={markAsPending}></TodoList>
    </div>
  )
}
