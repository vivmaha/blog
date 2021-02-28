import * as React from "react";
import { useEffect, useState } from "react";
import { RouteComponentProps, useParams } from "react-router";

import Article from "../components/Article";
import { Article as ArticleModel } from "../api/models/article";

import { getArticle } from "../api/get-articles";

interface Props extends RouteComponentProps<{ id: string }> {
}


export const ArticleView: React.FC<Props> = ({
  match,
}) => {
  const { id } = useParams<{id: string}>();
  const [article, setArticle] = useState<ArticleModel>();

  useEffect(() => {
    getArticle(id).then(setArticle);
  }, [id]);

  if (article === undefined) {
    // TODO - Add a better loading experience.
    return <div>Loading...</div>;
  }

  return (
    <Article
      article={article}
    />
  );
};