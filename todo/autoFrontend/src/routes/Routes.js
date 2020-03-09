import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todo from '../todo/Todo'
import About from '../about/About'

export default _ => (
  <Router>
    <Route exact path='/' component={Todo}></Route>
    <Route path='/todos' component={Todo}></Route>
    <Route path='/about' component={About}></Route>
  </Router>
)
