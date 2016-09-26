export const selectTodosByStatus = (todos, status) => {
  if (status === 'allStatuses') {
    return todos;
  }
  const isStatusDone = status === 'done';
  return todos.filter(t => t.isComplete === isStatusDone);
};

export const selectTodosByPriority = (todos, priority) => {
  if (priority === 'allPriorities' || !priority) {
    return todos;
  }
  return todos.filter(t => t.priority === priority);
};
