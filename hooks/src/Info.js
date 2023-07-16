import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    console.log(`랜더링이 완료되었습니다`); // `` es6문법
    console.log({
      name,
      nickname,
    });
  }, []); // [] : 업데이트할 두변수를 비울거야 , [name] : name만 업데이트 할거야

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickName = (e) => {
    setNickname(e.target.value);
  };
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} placeholder="이름" />
        <br />
        <input
          value={nickname}
          onChange={onChangeNickName}
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
