import React, { useState } from 'react';

const Say = () => {
  //hooks
  const [message, setMesage] = useState(''); //비포값 , 애프터 값, 초기값 -> 한줄 상태가 된다. class에서 함축됨
  const onClickEnter = () => setMesage('hello!');
  const onClickLeave = () => setMesage('bye~bye~');

  const [color, setColor] = useState('green');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        red
      </button>
      <button style={{ color: 'orange' }} onClick={() => setColor('orange')}>
        orange
      </button>
      <button style={{ color: 'yellow' }} onClick={() => setColor('yellow')}>
        yellow
      </button>
    </div>
  );
};

export default Say;
