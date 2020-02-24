import React from 'react';
import Familia from './Familia';
import Membro from './Membro';
import FamiliaSilva from './FamiliaSilva';


export default (props) => 
    <div>
        <Familia sobrenome="Pereira">
            <Membro nome="Andre"></Membro>
            <Membro nome="Mariana"></Membro>
        </Familia>
        <Familia>
            <Membro nome="Bia" sobrenome="Arruda"></Membro>
            <Membro nome="Gustavo" sobrenome="Arruda"></Membro>
        </Familia>
        <FamiliaSilva sobrenome="Silva Pereira"></FamiliaSilva>
    </div>

