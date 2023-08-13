import React from "react";
import { useParams } from "react-router-dom";
import Categories from "../components/Categories";
import NewList from "../components/NewList";

const NewsPage = () => {
  const params = useParams();
  const category = params.category || "all";
  return (
    <>
      <Categories />
      <NewList category={category} />
    </>
  );
};

export default NewsPage;
