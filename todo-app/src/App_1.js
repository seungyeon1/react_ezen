import { useCallback, useRef, useState } from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

//data 간단한 case & 파라미터 방식으로 todos 업데이트 하는 법
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌 스타일링 해보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);

  const nextId = useRef(4);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo)); //todos에 푸쉬
      nextId.current += 1; //nextId 1씩 더하기
    },
    [todos], //todos는 업데이트 (랜더링하자)
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id)); //(id)번 빼고 나와라
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          //***내가 선택한 아이템은 새롭게 복사해서 값을 변화 하고(id값의 체크값이 toggle 되고 ), 나머지 아이템은 그대로 가져온다.
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
