import React from 'react';
import Filho from './Filho';

export default _ => {
    const notificarSaida = lugar => alert(`Liberado para ${lugar}`)

    return <Filho notificarSaida={notificarSaida}></Filho>
}