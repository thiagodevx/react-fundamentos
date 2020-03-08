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
        if (state.current === 0) {
            newState.current = 1
            newState.clearDisplay = true
            newState.operation = operation
        } else {
            const isEquals = operation === '='
            const currentOperation = state.operation
            const values = [...state.values]
            const firstNumber = parseFloat(values[0])
            const secondNumber = parseFloat(values[1])
            switch (currentOperation) {
                case '+':
                    values[0] = firstNumber + secondNumber
                    break
                case '-':
                    values[0] = firstNumber - secondNumber
                    break
                case '/':
                    values[0] = firstNumber / secondNumber
                    break
                case '*':
                    values[0] = firstNumber * secondNumber
                    break
                default:
            }
            values[1] = 0
            newState.values = values
            newState.operation = isEquals ? null : operation
            newState.current = isEquals ? 0 : 1
            newState.clearDisplay = !isEquals
            newState.displayValue = values[0]

        }
        setState(newState)
    }

    const addDigit = (digit) => {
        if (digit === '.' && state.displayValue.includes('.')) {
            return
        }

        const currentValue = state.clearDisplay ? '0' : state.displayValue
        const newDisplayValue = currentValue === '0' && digit !== '.' ? digit : currentValue + digit
        const newState = { ...state }
        newState.values = [...state.values]
        newState.displayValue = newDisplayValue
        newState.values[state.current] = newDisplayValue
        newState.clearDisplay = false
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