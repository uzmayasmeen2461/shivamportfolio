import React from "react";
import articles from "./article-content";
import { Container } from "react-bootstrap";
import ArticleListComp from "./ArticleListComp";

const ArticlesList = () => {
  return (
    <>
      <h1 style={{ color: "goldenrod", marginTop: 100 }}>Articles</h1>
      <Container className="articleList">
        {/* <img src={"./Assets/pencil.jpg"} alt="bgImage" /> */}
        <ArticleListComp articles={articles} />
      </Container>
    </>
  );
};

export default ArticlesList;
