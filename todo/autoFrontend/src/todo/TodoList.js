import React from 'react'
import './TodoList.css'
import { connect } from 'react-redux'
import TodoListItem from './TodoListItem'
import { loadTodos } from './TodoActions'
import { useEffect } from 'react'

const TodoList = props => {
  const loadTodos = props.loadTodos

  useEffect(() => {
    loadTodos()
  }, [loadTodos])
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th className="actions">Ações</th>
        </tr>
      </thead>
      <tbody>
        {props.tarefas.map(tarefa => (
          <TodoListItem key={tarefa._id} tarefa={tarefa}></TodoListItem>
        ))}
      </tbody>
    </table>
  )
}

const mapStateToProps = state => ({
  tarefas: state.todoState.tarefas
})

const mapDispatchToProps = {
  loadTodos
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
