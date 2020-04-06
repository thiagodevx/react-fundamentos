import React from 'react'
import './TodoList.css'
import { connect } from 'react-redux'
import TodoListItem from './TodoListItem'

const TodoList = props => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th className="actions">Ações</th>
        </tr>
      </thead>
      <tbody>
        {props.list.map(todo => (
          <TodoListItem todo={todo}></TodoListItem>
        ))}
      </tbody>
    </table>
  )
}

const mapStateToProps = state => ({
  list: state.todoState.todos,
})

export default connect(mapStateToProps)(TodoList)
