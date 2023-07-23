import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    console.log(`effect`);
    console.log(name); //업데이트 후 값
    //return 뒷정리 함수
    return () => {
      console.log(`cleanup`); //언마운트 되기 전에 출력
      console.log(name); //업데이트 하기 전 값 출력
    };
  }, [name]); // 이름 업데이트 해라

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
