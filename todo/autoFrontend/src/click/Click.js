import React from 'react'
import { connect } from 'react-redux'
import { clicado, atualizarOTitulo, resetar } from './ClickActions'

const Click = props => {
  return (
    <div>
      <h1>{props.titulo}</h1>
      <button onClick={props.clicado}>Clicado {props.valor} vezes</button>
      <input
        value={props.titulo}
        onChange={e => props.atualizarOTitulo(e.target.value)}
      ></input>
      <button onClick={props.resetar}>Resetar</button>
    </div>
  )
}

const mapStateToProps = state => ({
  valor: state.clickState.valor,
  titulo: state.clickState.titulo
})

const mapDispatchToProps = {
  clicado,
  atualizarOTitulo,
  resetar
}
export default connect(mapStateToProps, mapDispatchToProps)(Click)
