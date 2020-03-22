import React from 'react';

export default props => (
  <div>
    {props.list.map(todo => <h1 key={todo}>{todo}</h1>)}
  </div>
);
