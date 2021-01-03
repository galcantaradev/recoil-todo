import { useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { todoListState } from '../state';

export const TodoItemForm = () => {
  const [value, setValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList(prev => {
      return [
        ...prev,
        {
          id: getId(),
          description: value,
          isComplete: false
        }
      ];
    });

    setValue('');
  };

  const handleChange = event => {
    const { value } = event.target;
    setValue(value);
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        name="description"
        onKeyDown={event => (event.key === 'Enter' ? addItem() : null)}
        onChange={handleChange}
        placeholder="descripion"
      />
      <button onClick={addItem}>add</button>
    </div>
  );
};

let id = 0;
function getId() {
  return id++;
}
