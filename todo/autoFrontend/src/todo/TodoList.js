import React from 'react'
import IconButton from '../template/IconButton'
import './TodoList.css'
import { connect } from 'react-redux'
import {
  deletarTarefa,
  marcarTarefaComDone,
  marcarTarefaComPending
} from './TodoActions'

const TodoList = props => {
  const renderRows = _ => {
    return props.list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
        <td>
          {todo.done ? (
            <IconButton
              type="warning"
              icon="undo"
              onClick={() => props.markAsPending(todo._id)}
            ></IconButton>
          ) : (
            <IconButton
              type="success"
              icon="check"
              onClick={() => props.markAsDone(todo._id)}
            ></IconButton>
          )}
          <IconButton
            type="danger"
            icon="trash-o"
            onClick={() => props.handleRemove(todo._id)}
          ></IconButton>
        </td>
      </tr>
    ))
  }
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th className="actions">Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  )
}

const mapStateToProps = state => ({
  list: state.todoState.todos
})

const mapDispatchToProps = {
  handleRemove: deletarTarefa,
  markAsDone: marcarTarefaComDone,
  markAsPending: marcarTarefaComPending
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
