import { useRecoilState } from 'recoil';

import { todoListFilterState, todoListTextFilterState } from '../state/atoms';

export const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const [textFilter, setTextFilter] = useRecoilState(todoListTextFilterState);

  const updateFilter = event => {
    const { name, value } = event.target;
    const set = name === 'select' ? setFilter : setTextFilter;
    set(value);
  };

  return (
    <div>
      Filter:
      <select name="select" value={filter} onChange={updateFilter}>
        <option value="SHOW_ALL">All</option>
        <option value="SHOW_COMPLETED">Completed</option>
        <option value="SHOW_UNCOMPLETED">Uncompleted</option>
      </select>
      <input
        name="textFilter"
        value={textFilter}
        onChange={updateFilter}
        placeholder="filter"
      />
    </div>
  );
};
