import React from 'react'
import IconButton from '../template/IconButton'

export default ({ todo }) => (
  <tr key={todo._id}>
    <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
    <td>
      {todo.done ? (
        <IconButton type="warning" icon="undo" onClick={() => {}}></IconButton>
      ) : (
        <IconButton type="success" icon="check" onClick={() => {}}></IconButton>
      )}
      <IconButton type="danger" icon="trash-o" onClick={() => {}}></IconButton>
    </td>
  </tr>
)
