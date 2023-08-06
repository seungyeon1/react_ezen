import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  //useNavigate :  Link 컴포넌트를 사용하지 않고 다른 페이지로 이동해야 하는 상황에서 사용하는 Hook
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goArticles = () => {
    //replace : articles갔을때 이전 페이지 안가게 생략하게..
    navigate("/articles", { replace: true });
  };
  return (
    <div>
      <header
        style={{
          height: "70px",
          background: "lightBlue",
          padidng: 16,
          fontSize: 24,
        }}
      >
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>go Article</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
