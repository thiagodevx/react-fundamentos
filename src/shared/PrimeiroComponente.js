import React from 'react';
import Familia from './Familia';
import Membro from './Membro';

export default (props) => 
    <div>
        <Familia>
            <Membro nome="Andre" sobrenome="Pereira"></Membro>
            <Membro nome="Mariana" sobrenome="Pereira"></Membro>
        </Familia>
        <Familia>
            <Membro nome="Bia" sobrenome="Arruda"></Membro>
            <Membro nome="Gustavo" sobrenome="Arruda"></Membro>
        </Familia>
    </div>

