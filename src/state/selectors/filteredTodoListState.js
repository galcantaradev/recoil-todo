import { selector } from 'recoil';
import { todoListState } from '../atoms';
import { todoListFilterState } from '../atoms/todoListFilterState';

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const todos = get(todoListState);

    switch (filter) {
      case 'SHOW_COMPLETED':
        return todos.filter(todo => todo.isComplete);

      case 'SHOW_UNCOMPLETED':
        return todos.filter(todo => !todo.isComplete);

      default:
        return todos;
    }
  }
});
