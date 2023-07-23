import React, { useRef } from "react";

const RefSample = () => {
  const id = useRef(1); //1값을 저장을 한다.
  const setId = (n) => {
    id.current = n; //현재의 아이디 : 대입해라
  };
  const printId = () => {
    console.log(id.current);
  };
  return <div>Ref</div>;
};

export default RefSample;
