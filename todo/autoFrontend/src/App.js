import React from 'react'
import './App.css'
import Todo from './todo/Todo'
import About from './about/About'

export default _ => {
  return (
    <div className="container">
      <Todo></Todo>
      <About></About>
    </div>
  )
}