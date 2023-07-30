import { useCallback, useRef, useState } from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

//data 많이 있을 경우 case : 성능 안좋은 예시를 렌더링 좋게 하는 방법 React.memo & todos 함수형 업데이트

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      //push : 한꺼번에 데이터 넣고싶어서 사용함
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

const App = () => {
  const [todos, setTodos] = useState(createBulkTodos);
  // createBulkTodos() 뒤에 ()함수형태로 넣게되면 계속 랜더링이 되므로
  // ()빼고 파라미터값만 넣어야한다. 그러면 함수 한번만 실행
  const nextId = useRef(2501);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos((todos) => todos.concat(todo)); //todos에 푸쉬
    nextId.current += 1; //nextId 1씩 더하기
  }, []);

  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id)); //(id)번 빼고 나와라
  }, []);

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        //내가 선택한 아이템은 새롭게 복사해서 값을 변화 하고(id값의 체크값이 toggle 되고 ), 나머지 아이템은 그대로 가져온다.
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
