import React from 'react'
import Grid from '../template/Grid'
import IconButton from '../template/IconButton'
import { connect } from 'react-redux'

const TodoForm = props => {
  const keyHandler = e => {
    switch (e.key) {
      case 'Enter':
        e.shiftKey ? props.search() : props.handleAdd()
        break
      case 'Escape':
        props.clear()
        break
      default:
        break
    }
  }
  return (
    <div className="todoForm" role="form">
      <Grid cols="12 9 10">
        <input
          id="descricao"
          className="form-control"
          placeholder="Adicione uma tarefa"
          value={props.descricao}
          onKeyUp={keyHandler}
        ></input>
      </Grid>
      <Grid cols="12 3 2">
        <IconButton
          type="primary"
          icon="plus"
          onClick={props.handleAdd}
        ></IconButton>
        <IconButton
          type="default"
          icon="close"
          onClick={props.clear}
        ></IconButton>
      </Grid>
    </div>
  )
}
const mapStateToProps = state => ({
  descricao: state.todoState.descricao,
})

export default connect(mapStateToProps)(TodoForm)
