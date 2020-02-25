import React from 'react';
import Membro from './Membro';

const sobrenome = "silva"
export default _ => 
    <div>
        <Membro nome="José" sobrenome={sobrenome}></Membro>
        <Membro nome="Daniela" sobrenome={sobrenome}></Membro>
        <Membro nome="Pedro" sobrenome={sobrenome}></Membro>
        <Membro nome="Ana" sobrenome={sobrenome}></Membro>
    </div>