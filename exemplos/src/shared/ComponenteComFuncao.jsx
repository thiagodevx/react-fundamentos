import React from 'react';
import { useState } from 'react';

const aprovados = ['Paula', 'Roberta', 'Gustavo', 'Julia']

export default props => {
    const[counter, setCounter] = useState(0)
    const gerarItensDaLista = itens => {
        return itens.map(item => <li>{item}</li>)
    }
    return (
    <ul onClick={() => setCounter(counter + 1)}>
        {counter}
        {gerarItensDaLista(aprovados)}
    </ul>)
}