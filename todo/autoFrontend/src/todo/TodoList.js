import React from 'react'

export default props => (
  <div>
    {props.list.map(todo => <h1 key={todo._id}>{todo.description}</h1>)}
  </div>
)
