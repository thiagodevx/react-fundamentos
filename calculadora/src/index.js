import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Calculator from './main/Calculator';
import './index.css'

ReactDOM.render(
    <>
        <h1>Calculadora</h1>
        <Calculator></Calculator>
    </>
        , document.getElementById('root'));
serviceWorker.unregister();
