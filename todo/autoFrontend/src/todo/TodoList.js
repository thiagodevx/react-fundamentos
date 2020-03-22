import React from 'react'

export default props => {
  const renderRows = _ => {
    return props.list.map(todo => (
      <tr key={todo._id}>
        <td>{todo.description}</td>
      </tr>
    ))
  }
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  )
}
