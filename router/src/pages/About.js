import React from "react";
// import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
const About = () => {
  // const location = useLocation();
  const [searchParams, setSearchParmas] = useSearchParams();
  const detail = searchParams.get("detail"); //key값 : detail 얻다
  const mode = searchParams.get("mode"); //key값

  const onToggleDetail = () => {
    setSearchParmas({ mode, detail: detail === "true" ? false : true });
  };
  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1; //null 이면 1(String) 나오고, 아니면 숫자로 바꿔서 + 1 해라
    setSearchParmas({ mode: nextMode, detail });
  };
  return (
    <div>
      <h1>소개 합니다.</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      {/* <p>쿼리스트링 : {location.search}</p> */}
      <p>detail : {detail}</p>
      <p>mode : {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
    </div>
  );
};

export default About;
