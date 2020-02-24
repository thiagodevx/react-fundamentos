import React from 'react';
import { useState } from 'react';

export default _ => {
    const [contador, setContador] = useState(0)
    return (
    <button onClick={()=>setContador(contador + 1)}>
        {contador}
    </button>
    )
}