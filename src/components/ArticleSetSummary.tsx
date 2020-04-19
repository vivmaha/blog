import * as React from "react";
import { Link } from "react-router-dom";
import ArticleCaption from "./ArticleCaption";
import ArticleModel from "../models/IArticle";
import ArticleSetModel from "../models/IArticleSet";

export interface Props {
  articleSet: ArticleSetModel;
  nextArticle?: ArticleModel;
  includeLinkToNextArticle?: boolean;
}

const ArticleSetSummary: React.FC<Props> = ({
  articleSet,
  nextArticle,
  includeLinkToNextArticle,
}) => {
  const link = `/series/${articleSet.id}`;

  let linkToNextArticleElement = null;
  if (includeLinkToNextArticle && nextArticle) {
    const nextArticleUrl = `/article/${nextArticle.id}`;
    linkToNextArticleElement = (
      <p>
        Up next: <Link to={nextArticleUrl}>{nextArticle.title}</Link>
      </p>
    );
  }

  return (
    <ArticleCaption>
      <p>
        This note is part of a series: <Link to={link}>{articleSet.title}</Link>
      </p>
      {linkToNextArticleElement}
    </ArticleCaption>
  );
};

export { ArticleSetSummary as default };
