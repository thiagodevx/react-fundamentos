import React from 'react'
import './App.css'
import Todo from './todo/Todo'
import About from './about/About'
import Menu from './template/Menu'

export default _ => {
  return (
    <div className="container">
      <Menu></Menu>
      <Todo></Todo>
      <About></About>
    </div>
  )
}