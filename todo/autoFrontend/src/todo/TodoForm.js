import React from 'react'
import Grid from '../template/Grid'
import IconButton from '../template/IconButton'

export default props => (
  <div className='todoForm' role='form'>
    <Grid cols='12 9 10'>
      <input
        id='description'
        className='form-control'
        placeholder='Adicione uma tarefa'
        value={props.description}
        onChange={e => props.changeDescription(e.target.value)}></input>
    </Grid>
    <Grid cols='12 3 2'>
      <IconButton type='primary' icon='plus' onClick={props.handleAdd}></IconButton>
      <IconButton type='info' icon='search' onClick={props.search}></IconButton>
      <IconButton type='default' icon='close' onClick={props.clear}></IconButton>
    </Grid>
  </div>
)
