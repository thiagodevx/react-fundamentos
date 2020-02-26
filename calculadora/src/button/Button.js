import React from 'react'
import './Button.css'

export default props => {
    const classes = ['button']
    if (props.double) classes.push('double')
    if (props.triple) classes.push('triple')
    if (props.operation) classes.push('operation')
    const notifyOwnValue = () => props.clicked(props.label)
    return (
        <button
            onClick={notifyOwnValue}
            className={classes.join(' ')}>
            {props.label}
        </button>)
}