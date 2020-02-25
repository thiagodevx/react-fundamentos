import React, { useState } from 'react';

export default _ => {
    const [contador, setContador] = useState(0)
    const incrementar = () => setContador(contador + 1)
    return (
        <div>
            <h1>{contador}</h1>
            <button onClick={incrementar}>Adicionar</button>
        </div>
    )
}