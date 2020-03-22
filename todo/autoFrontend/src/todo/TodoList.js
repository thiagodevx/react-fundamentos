import React from 'react'
import IconButton from '../template/IconButton'

export default props => {
  const renderRows = _ => {
    return props.list.map(todo => (
      <tr key={todo._id}>
        <td>{todo.description}</td>
        <td>
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
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  )
}
