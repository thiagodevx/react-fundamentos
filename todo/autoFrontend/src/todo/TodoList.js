import React from 'react'
import IconButton from '../template/IconButton'
import './TodoList.css'

export default props => {
  const renderRows = _ => {
    return props.list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
        <td>
          {todo.done ? (
            <IconButton type='warning' icon='undo' onClick={() => props.markAsPending(todo._id)}></IconButton>
          ) : (
            <IconButton type='success' icon='check' onClick={() => props.markAsDone(todo._id)}></IconButton>
          )}
          <IconButton type='danger' icon='trash-o' onClick={() => props.handleRemove(todo._id)}></IconButton>
        </td>
      </tr>
    ))
  }
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Descrição</th>
          <th className='actions'>Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  )
}
