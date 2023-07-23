import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Info from "./Info";

function App() {
  // <info>자식 컴포넌트을 상태값을 움직이게 하고싶으면 부모(App)한테 useState 지정해줘야 <info>를 움직일수 있다.
  const [visible, setVisble] = useState(false);
  return (
    <div>
      <h2>useState를 여러번 사용하기</h2>
      <button
        onClick={() => {
          setVisble(!visible); //클릭할때마다 반전으로 처리해라
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <Info />}
      {/* && :true ,or: false */}
    </div>
  );
}

export default App;
