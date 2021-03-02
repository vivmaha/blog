import * as React from "react";
import { Link } from "react-router-dom";
import { ArticleCaption } from "./ArticleCaption";

import { Article as ArticleModel } from "../api/models/article";

export interface Props {
  series: NonNullable<ArticleModel["series"]>;
  includeLinkToNextArticle?: boolean;
}

const SeriesSummary: React.FC<Props> = ({
  series,
  includeLinkToNextArticle,
}) => {
  const { id, title, nextArticle } = series;
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

export { SeriesSummary as default };
