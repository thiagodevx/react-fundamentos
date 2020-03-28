import React from 'react';
import Teste from '../teste/Teste';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Todo from '../todo/Todo';
import About from '../about/About';
import Counter from '../counter/Counter';

export default _ => (
  <BrowserRouter>
    <Switch>
      <Route path="/todos" component={Todo}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/teste" component={Teste}></Route>
      <Route path="/count" component={Counter}></Route>
      <Route component={Todo}></Route>
    </Switch>
  </BrowserRouter>
);
