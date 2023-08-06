import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
const Articles = () => {
  return (
    <div>
      <ul>
        <ArticleItem id={1} />
        <ArticleItem id={2} />
        <ArticleItem id={3} />
      </ul>
      {/* Outlet : 자식 컴포넌트,  <Route path=":id" element={<Article />} /> */}
      <Outlet />
    </div>
  );
};

const ArticleItem = ({ id }) => {
  const activeStyle = {
    color: "green",
    fontSize: 20,
  };
  return (
    <li>
      {/* <Link to="/articles/1">게시글 1</Link> */}
      <NavLink
        to={`/articles/${id}`}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        게시글 {id}
      </NavLink>
    </li>
  );
};
export default Articles;
