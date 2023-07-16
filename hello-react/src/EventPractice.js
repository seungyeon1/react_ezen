import React, { useState } from 'react';

const EventPractice = () => {
  //초기값 설정하자 변수 설정
  const [form, setForm] = useState({
    username: '',
    message: '',
  });
  const { username, message } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form, //rest연산자 form객체를 복사해서 가져온다. (기존 값을 가져와서 새로운 형태로 가져온다.)
      [e.target.name]: e.target.value,
    };
    setForm(nextForm); //업데이트하자
  };
  const onClick = () => {
    //alert창에 onChange값이 나온다.
    alert(username + ':' + message);
    //초기화한다
    setForm({
      username: '',
      message: '',
    });
  };
  const onKey = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <h1>함수형 이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="placeholder"
        value={message}
        onChange={onChange}
        onKeyUp={onKey}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
