import "./App.css";
import CounterContainer from "./containers/CounterContainer";
import SampleContainer from "./containers/SampleContainer";

function App() {
  return (
    <>
      {/* 리덕스에서 컨테이너컴포넌트가 중심 */}
      <CounterContainer />
      <hr />
      <SampleContainer />
    </>
  );
}

export default App;
