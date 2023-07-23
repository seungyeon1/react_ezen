import React, { useReducer } from "react";
//useReducer 사용법 : 단순한 상황말고 더 다양한 상황에서 사용합니다. (예시는 예시일뿐)

function counter(state, action) {
  //action.type에 따라 다른 작업 수행
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECRMENT":
      return { value: state.value - 1 };
    default:
      //아무것도 해당되지 않을 때 기존 상태 반환
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(counter, { value: 0 });
  // 해석 -> [현재상태, 액션을 발생시키는함수] = useReducer(리듀서함수, 해당리듀서의 기본값)
  // {value} 중괄호 하는 이유는 변수 처리로 해서 중괄호 사용

  return (
    <div>
      <div>
        <p>
          현재 카운터 값은 <b>{state.value}</b>
        </p>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
        <button onClick={() => dispatch({ type: "DECRMENT" })}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
