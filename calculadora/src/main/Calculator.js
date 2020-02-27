import React, { useState } from 'react'
import Button from '../button/Button'
import './Calculator.css'
import Display from '../display/Display'

const defaultState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: ['0', '0'],
    current: 0
}

export default _ => {

    const [state, setState] = useState(defaultState)

    const clearMemory = _ => {
        setState({ ...defaultState })
    }

    const setOperation = (operation) => {
        const newState = { ...state }
        if (operation === '=') {

        }
        setState(newState)
    }

    const addDigit = (digit) => {
        if (digit === '.' && state.displayValue.includes('.')) {
            return
        }
        const newDisplayValue = state.displayValue === '0' ? digit : state.displayValue + digit
        const newState = { ...state }
        newState.displayValue = newDisplayValue
        newState.values[state.current] = newDisplayValue
        setState(newState)
    }

    return (
        <div className="calculator">
            <Display value={state.displayValue}></Display>
            <Button clicked={clearMemory} triple label='AC'></Button>
            <Button clicked={setOperation} operation label='/'></Button>
            <Button clicked={addDigit} label='7'></Button>
            <Button clicked={addDigit} label='8'></Button>
            <Button clicked={addDigit} label='9'></Button>
            <Button clicked={setOperation} operation label='*'></Button>
            <Button clicked={addDigit} label='4'></Button>
            <Button clicked={addDigit} label='5'></Button>
            <Button clicked={addDigit} label='6'></Button>
            <Button clicked={setOperation} operation label='-'></Button>
            <Button clicked={addDigit} label='1'></Button>
            <Button clicked={addDigit} label='2'></Button>
            <Button clicked={addDigit} label='3'></Button>
            <Button clicked={setOperation} operation label='+'></Button>
            <Button clicked={addDigit} double label='0'></Button>
            <Button clicked={addDigit} label='.'></Button>
            <Button clicked={setOperation} operation label='='></Button>
        </div>
    )
}