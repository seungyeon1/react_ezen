import React, { useState, useMemo, useCallback, useRef } from "react";

//전역 함수
const getAverage = (numbers) => {
  console.log("평균값 계산 중");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

//컴포넌트
const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null); //null : 초기화 , 해제 라는 뜻 (처음에 인풋에 커서가 안생긴다.)

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); //컴포넌트가 처음 렌더링될 때만 함수 생성 / 업데이트가 아닌 재사용 한다는뜻

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number)); //새롭게 복사
    setList(nextList); //업데이트
    setNumber(""); //빈값으로 다시 정의
    inputEl.current.focus();
  }, [number, list]); //number,list 바뀌었을때만 함수 생성

  //getAverage는 list가 달라졌을때만 호출되고, list가 동일할때는 최초에 호출 결과를 계속해서 재사용
  const avg = useMemo(() => getAverage(list), [list]);

  const onKey = (e) => {
    if (e.key === "Enter") {
      onInsert();
    }
  };
  return (
    <div>
      {/* 자바스크립 input에선 객체 인식 */}
      <input
        ref={inputEl}
        value={number}
        onChange={onChange}
        onKeyDown={onKey}
      />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>useMemo 평균값:</b>
        {/* {getAverage(list)} */}
        {avg}
      </div>
    </div>
  );
};

export default Average;
