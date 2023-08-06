import React from "react";
import { Navigate } from "react-router-dom";
const MyPage = () => {
  const isLoggeIn = false;
  if (!isLoggeIn) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  return <div>마이페이지</div>;
};

export default MyPage;
