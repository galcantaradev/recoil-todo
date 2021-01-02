import { RecoilRoot } from 'recoil';

import { TodoList } from './components';

function App() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
