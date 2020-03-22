import React, { useState } from 'react';
import PageHeader from '../template/PageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const initialState = {
  description: '',
  todoList: []
};
export default _ => {
  const [state, setState] = useState(initialState);

  const handleAdd = () => {
    const newState = { ...state };
    const newTodoList = [...state.todoList, state.description];
    newState.description = '';
    newState.todoList = newTodoList;
    setState(newState);
  };
  const changeDescription = (description) => {
    const newState = { ...state };
    newState.description = description;
    setState(newState);
  };

  return (
    <div>
      <PageHeader name='tarefas' small='cadastro'></PageHeader>
      <TodoForm handleAdd={handleAdd} description={state.description} changeDescription={changeDescription}></TodoForm>
      <TodoList list={state.todoList}></TodoList>
    </div>
  );
};
