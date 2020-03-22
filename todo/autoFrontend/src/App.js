import React from 'react';
import Routes from './routes/Routes';
import './App.css';
import Menu from './template/Menu';

export default _ => {
  return (
    <div className='container'>
      <Menu></Menu>
      <Routes></Routes>
    </div>
  );
};
