import React, { useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '눈사람2' },
    { id: 3, text: '눈사람3' },
    { id: 4, text: '눈사람4' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nexId, setNexId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);

  const onClick = () => {
    const nextNames = names.concat({
      //concat : 추가
      id: nexId,
      text: inputText,
    });
    setNexId(nexId + 1);
    setNames(nextNames);
    setInputText('');
  };

  const onKey = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id); //(5)번 id가 (5)번 id 빼고 나와라
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    //onDoubleClick : 리액트이벤트
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <div>
      <h4>map</h4>
      <input value={inputText} onChange={onChange} onKeyDown={onKey} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </div>
  );
};

export default IterationSample;
