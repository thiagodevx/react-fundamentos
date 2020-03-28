import React from 'react'

export default () => {
    const valor = 'oi'
    const updateValor = () => { }
    return (
        <div>
            <p>O valor do input é: {valor}</p>
            <input value={valor} onChange={updateValor}></input>
        </div>
    )
}
