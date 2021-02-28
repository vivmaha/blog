import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArticles } from "../api/get-article";
import { ArticleSummary } from "../api/models/article-summary";

import ArticleSet from "../components/ArticleSet";
import articleSets from "../content/article-sets/ArticleSets";

const ArticleSetView: React.FC = () => {
  const {id} = useParams<{id: string}>();
  const [articles, setArticles] = useState<ArticleSummary[]>();

  useEffect(() => {
    getArticles().then(setArticles);
  }, []);
  
  const articleSet = articleSets.find(set => set.id === id);
  if (articleSet === undefined) {
    throw new Error(`Unkown article set ${id}`);
  }

  if (articles === undefined) {
    // TODO Improve this UX
    return <div>Loading...</div>;
  }

  const articlesInSet = articles
    .filter((article) => article.articleSet && article.articleSet.id === id)

  return <ArticleSet articles={articlesInSet} articleSet={articleSet} />;
};

export { ArticleSetView as default };
