import React, { useReducer } from "react";
import useInputs from "./useInputs";

const Info = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;

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
