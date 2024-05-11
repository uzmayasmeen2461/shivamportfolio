import React from "react";
import { Link } from "react-router-dom";

const ArticleListComp = ({ articles }) => {
  return (
    <div className="articlesList">
      {articles.map((article) => (
        <Link
          key={article.name}
          className="article-list-item"
          to={`${article.href}`}
        >
          {/* <image className="articleImage" src={article.image} /> */}

          <h3>{article.title}</h3>
          <div className="articleContentdiv">
            <img alt="img" src={article.image} className="contentImg" />

            <p className="articleContent">
              {article.content[0].substring(0, 150)}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ArticleListComp;
