import { useRecoilState } from 'recoil';

import { todoListFilterState } from '../state/atoms';

export const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = event => {
    const { value } = event.target;
    setFilter(value);
  };

  return (
    <div>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="SHOW_ALL">All</option>
        <option value="SHOW_COMPLETED">Completed</option>
        <option value="SHOW_UNCOMPLETED">Uncompleted</option>
      </select>
    </div>
  );
};
