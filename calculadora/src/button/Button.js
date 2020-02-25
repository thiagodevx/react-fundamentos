import React from 'react';
import './Button.css'

export default props => {
    const classes = ['button']
    if(props.active) classes.push('active')
    if(props.double) classes.push('double')
    if(props.triple) classes.push('triple')
    return (
        <button 
            className={classes.join(' ')}>
            {props.label}
        </button>)
}