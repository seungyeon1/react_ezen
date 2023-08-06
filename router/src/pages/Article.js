import React from "react";

import { useParams } from "react-router-dom";
const Article = () => {
  const { id } = useParams(); // () 필수...
  return (
    <div>
      <h2>게시글 {id}</h2>
    </div>
  );
};

export default Article;
