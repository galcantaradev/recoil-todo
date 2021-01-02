import { useRecoilState } from 'recoil';

import { todoListState } from '../state';
import { replaceItemAtIndex, removeItemAtIndex } from '../utils';

export const TodoItem = ({ item }) => {
  const [todos, setTodos] = useRecoilState(todoListState);
  const index = todos.findIndex(todo => todo.id === item.id);

  const handleEdit = event => {
    const { value } = event.target;

    const newList = replaceItemAtIndex(todos, index, {
      ...item,
      description: value
    });

    setTodos(newList);
  };

  const handleCompletion = () => {
    const newList = replaceItemAtIndex(todos, index, {
      ...item,
      isComplete: !item.isComplete
    });

    setTodos(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todos, index);

    setTodos(newList);
  };

  return (
    <div>
      <input
        name="description"
        value={item.description}
        onChange={handleEdit}
      />
      <input
        type="checkbox"
        value={item.isComplete}
        checked={item.isComplete}
        onChange={handleCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};
