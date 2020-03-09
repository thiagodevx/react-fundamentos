import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Todo from '../todo/Todo'
import About from '../about/About'

export default _ => (
  <BrowserRouter>
    <Switch>
      <Route path='/todos' component={Todo}></Route>
      <Route path='/about' component={About}></Route>
      <Route component={Todo}></Route>
    </Switch>
  </BrowserRouter>
)
