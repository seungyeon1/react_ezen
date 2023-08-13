import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import styled from "styled-components";
import axios from "axios";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const sampleArticle = {
  title: "제목",
  description: "내용",
  url: "https://google.com", //default url
  urlToImage: "https://via.placeholder.com/120x120", // default이미지 제공하는 사이트
};

const NewList = ({ category }) => {
  const [articles, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);

  //시작할때
  useEffect(() => {
    //fetchData변수 만들어서 비동기를 담아야한다.
    //함수 비동기는 async 변수명 사용하는데 hook하고 같이 사용할때는 따로 변수를 만들어줘야한다.
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === "all" ? "" : `&category=${category}`;
        const reponse = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=f2631f791849422c9e22c328f8536f03`
        );
        setArticle(reponse.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData(); //호출
  }, [category]);

  //대기중일때
  if (loading) {
    return <NewsListBlock>대기중 ...</NewsListBlock>;
  }
  // articles 값이 설정되지 않았을 때 (비어질 경우)
  // 아래 로직 처음 map돌아갈때 데이터 아직 없기때문에 즉 articles빈값이다. 그러면 오류로 나오기때문에
  // 현재 null이 아닌지 검사해야 한다.
  if (!articles) {
    return null;
  }
  //articles 값이 유효할 때
  return (
    <NewsListBlock>
      {/* 처음 map돌아갈때 데이터 아직 없기때문에 즉 articles빈값이다. 그러면 오류로 나온다.*/}
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewList;
