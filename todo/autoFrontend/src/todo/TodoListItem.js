import React from 'react'
import IconButton from '../template/IconButton'

export default ({ tarefa }) => (
  <tr>
    <td className={tarefa.done ? 'markedAsDone' : ''}>{tarefa.description}</td>
    <td>
      {tarefa.done ? (
        <IconButton type="warning" icon="undo" onClick={() => {}}></IconButton>
      ) : (
        <IconButton type="success" icon="check" onClick={() => {}}></IconButton>
      )}
      <IconButton type="danger" icon="trash-o" onClick={() => {}}></IconButton>
    </td>
  </tr>
)
