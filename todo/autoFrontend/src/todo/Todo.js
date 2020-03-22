import React from 'react';
import PageHeader from '../template/PageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default _ => {
  const handleAdd = () => {
    alert('hi');
  };
  return (
    <div>
      <PageHeader name='tarefas' small='cadastro'></PageHeader>
      <TodoForm handleAdd={handleAdd}></TodoForm>
      <TodoList></TodoList>
    </div>
  );
};
