import React from 'react'
import { connect } from 'react-redux'
import { testeAtualizarValor } from './TesteActions'

const Teste = ({ valor, updateValue }) => {
  return (
    <div>
      <p>O valor do input é: {valor}</p>
      <input value={valor} onChange={e => updateValue(e.target.value)}></input>
    </div>
  )
}

const mapStateToProps = state => ({
  valor: state.testeState.valor
})

const mapDispatchToProps = {
  updateValue: testeAtualizarValor
}

export default connect(mapStateToProps, mapDispatchToProps)(Teste)
