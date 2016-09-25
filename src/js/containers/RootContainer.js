import React from 'react';
import TodoList from './TodoList';
import UndoRedo from './UndoRedo';
import AddButton from './AddButton';
import SelectPriorityFilter from './SelectPriorityFilter';
import SelectStatusFilter from './SelectStatusFilter';

const RootContainer = () => (
  <div>
    <TodoList />
    <br />
    <AddButton />
    <UndoRedo />
    <br />
    <SelectPriorityFilter />
    <br />
    <SelectStatusFilter />
  </div>
);

export default RootContainer;
