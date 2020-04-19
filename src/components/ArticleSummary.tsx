import moment from "moment";
import * as React from "react";
import { Link } from "react-router-dom";
import Article from "../models/IArticle";

import "./ArticleSummary.scss";

const ArticleSummary: React.FC<{ article: Article }> = ({ article }) => {
  const friendlyDate = moment(article.date).format("MMM Do, YYYY");
  const link = `/article/${article.id}`;
  return (
    <section className="article-summary">
      <h1>
        <Link to={link}>{article.title}</Link>
      </h1>
      <span>{friendlyDate}</span>
      <p className="no-margin-top">{article.introduction.preview}</p>
    </section>
  );
};

export { ArticleSummary as default };
