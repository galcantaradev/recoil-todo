import { useRecoilValue } from 'recoil';

import { filteredTodoListState } from '../state';
import { TodoItem, TodoItemForm, TodoListFilters, TodoListStats } from './';

export const TodoList = () => {
  const todos = useRecoilValue(filteredTodoListState);

  return (
    <>
      <h2>new todo</h2>
      <TodoItemForm />

      <h2>stats</h2>
      <TodoListStats />

      <h2>todos</h2>
      <TodoListFilters />
      {todos.map(todo => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </>
  );
};
