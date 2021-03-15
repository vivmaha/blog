import * as React from "react";
import { Link } from "react-router-dom";
import { ArticleCaption } from "./ArticleCaption";

import { Article as ArticleModel } from "../api/models/article";


export interface Props {
  articleSet: NonNullable<ArticleModel["articleSet"]>;
  includeLinkToNextArticle?: boolean;
}

const ArticleSetSummary: React.FC<Props> = ({
  articleSet,
  includeLinkToNextArticle,
}) => {
  const {id, title, nextArticle} = articleSet;
  const link = `/series/${id}`;

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
        This note is part of a series: <Link to={link}>{title}</Link>
      </p>
      {linkToNextArticleElement}
    </ArticleCaption>
  );
};

export { ArticleSetSummary as default };
