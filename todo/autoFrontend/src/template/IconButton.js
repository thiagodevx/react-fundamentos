import React from 'react'

export default props => {
  if (props.hidden) return null
  else
    return (
      <button className={'btn btn-' + props.type} onClick={props.onClick}>
        <i className={'fa fa-' + props.icon}></i>
      </button>
    )
}
