import React, { useState } from 'react'
import Button from '../button/Button'
import './Calculator.css'
import Display from '../display/Display'

export default _ => {

    const [result, setResult] = useState(0)

    const clearMemory = _ => {
        alert('clear')
    }

    const setOperation = (operation) => {
        alert(operation)
    }

    const addDigit = (digit) => {
        setResult(digit)
    }

    return (
        <div className="calculator">
            <Display value={result}></Display>
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