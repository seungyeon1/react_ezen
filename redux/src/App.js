import "./App.css";
import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";

function App() {
  return (
    <div>
      {/* 리덕스에서 컨테이너컴포넌트가 중심 */}
      <CounterContainer number={0} />
      <hr />
      <TodosContainer />
    </div>
  );
}

export default App;
