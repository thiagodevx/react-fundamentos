import React from 'react'
import Button from '../button/Button'
import './Calculator.css'
import Display from '../display/Display'

export default _ => {

    const buttonClicked = (buttonLabel) => {
        alert('clicked on ' + buttonLabel)
    }

    return (
        <div className="calculator">
            <Display value='AAAAAAAA'></Display>
            <Button clicked={buttonClicked} label='AC'></Button>
            <Button clicked={buttonClicked} label='/'></Button>
            <Button clicked={buttonClicked} label='7'></Button>
            <Button clicked={buttonClicked} label='8'></Button>
            <Button clicked={buttonClicked} label='9'></Button>
            <Button clicked={buttonClicked} label='*'></Button>
            <Button clicked={buttonClicked} label='4'></Button>
            <Button clicked={buttonClicked} label='5'></Button>
            <Button clicked={buttonClicked} label='6'></Button>
            <Button clicked={buttonClicked} label='-'></Button>
            <Button clicked={buttonClicked} label='1'></Button>
            <Button clicked={buttonClicked} label='2'></Button>
            <Button clicked={buttonClicked} label='3'></Button>
            <Button clicked={buttonClicked} label='+'></Button>
            <Button clicked={buttonClicked} label='0'></Button>
            <Button clicked={buttonClicked} label='.'></Button>
            <Button clicked={buttonClicked} label='='></Button>
        </div>
    )
}