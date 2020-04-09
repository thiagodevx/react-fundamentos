import React from 'react'
import Grid from '../template/Grid'
import IconButton from '../template/IconButton'
import { connect } from 'react-redux'
import { addTodo, updateDescription } from './TodoActions'

const TodoForm = props => {
  const keyHandler = e => {
    switch (e.key) {
      case 'Enter':
        props.addTodo(props.descricao)
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
          onChange={props.updateDescription}
          onKeyUp={keyHandler}
        ></input>
      </Grid>
      <Grid cols="12 3 2">
        <IconButton
          type="primary"
          icon="plus"
          onClick={() => props.addTodo(props.descricao)}
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
  descricao: state.todoState.descricao
})
const mapDispatchToProps = {
  addTodo,
  updateDescription
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
