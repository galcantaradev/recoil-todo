import { selector } from 'recoil';
import { todoListState, todoListTextFilterState } from '../atoms';
import { todoListFilterState } from '../atoms/todoListFilterState';

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const textFilter = get(todoListTextFilterState);
    const todos = get(todoListState);

    switch (filter) {
      case 'SHOW_COMPLETED':
        return todos.filter(
          todo =>
            todo.isComplete &&
            todo.description?.toLowerCase().includes(textFilter.toLowerCase())
        );

      case 'SHOW_UNCOMPLETED':
        return todos.filter(
          todo =>
            !todo.isComplete &&
            todo.description?.toLowerCase().includes(textFilter.toLowerCase())
        );

      default:
        return todos.filter(todo =>
          todo.description?.toLowerCase().includes(textFilter.toLowerCase())
        );
    }
  }
});
