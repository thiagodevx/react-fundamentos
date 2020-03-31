import React from 'react'
import { connect } from 'react-redux'
import { limparGrupos, alterarDescricao, adicionarGrupo } from './GrupoActions'

const Grupo = props => (
  <div>
    {props.grupos.map(grupo => (
      <p key={grupo}>{grupo}</p>
    ))}
    <button onClick={props.limparGrupos}>Limpar os grupos</button>
    <br></br>
    <input value={props.descricao} onChange={props.alterarDescricao}></input>
    <button onClick={props.adicionarGrupo}>Criar novo Grupo</button>
  </div>
)

const mapStateToProps = state => ({
  grupos: state.grupoState.grupos,
  descricao: state.grupoState.descricao
})

const mapDispatchToProps = {
  limparGrupos,
  alterarDescricao,
  adicionarGrupo
}
export default connect(mapStateToProps, mapDispatchToProps)(Grupo)
