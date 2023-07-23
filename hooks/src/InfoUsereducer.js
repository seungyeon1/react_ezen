import React, { useReducer } from "react";
import useInputs from "./useInputs";

function inputValue(state, action) {
  return {
    ...state, //불변성 법칙 으로 인해 복사!
    [action.name]: action.value, // input의 name의 value를 출력한다 -> key값을 value로 인지
  };
}

const Info = () => {
  // [현재상태, 액션을 발생시키는함수] = useReducer(리듀서함수, 해당리듀서의 기본값)
  const [state, dispatch] = useReducer(inputValue, {
    //변수만 추가 하는 편리함
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;

  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input
          name="name"
          value={name}
          onChange={onChange}
          placeholder="이름"
        />
        <br />
        <input
          name="nickname"
          value={nickname}
          onChange={onChange}
          placeholder="닉네임"
        />
      </div>
      <div>
        <strong>이름 : </strong>
        {name}
      </div>
      <div>
        <strong>닉네임 : </strong>
        {nickname}
      </div>
    </div>
  );
};

export default Info;
