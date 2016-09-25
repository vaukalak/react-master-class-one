import React from 'react';
import TodoList from './TodoList';
import UndoRedo from './UndoRedo';
import AddButton from './AddButton';
import SelectPriorityFilter from './SelectPriorityFilter';

const RootContainer = () => (
  <div>
    <TodoList />
    <br />
    <AddButton />
    <UndoRedo />
    <br />
    <SelectPriorityFilter />
  </div>
);

export default RootContainer;
