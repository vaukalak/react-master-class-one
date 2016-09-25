import React from 'react';
import TodoList from './TodoList';
import UndoRedo from './UndoRedo';
import AddButton from './AddButton';

const RootContainer = () => (
  <div>
    <TodoList />
    <br />
    <AddButton />
    <UndoRedo />
  </div>
);

export default RootContainer;
