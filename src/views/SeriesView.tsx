import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArticles } from "../api/get-article";
import { ArticleSummary } from "../api/models/article-summary";

import Series from "../components/Series";
import seriess from "../content/article-sets/Series";

const SeriesView: React.FC = () => {
  const {id} = useParams<{id: string}>();
  const [articles, setArticles] = useState<ArticleSummary[]>();

  useEffect(() => {
    getArticles().then(setArticles);
  }, []);
  
  const series = seriess.find(set => set.id === id);
  if (series === undefined) {
    throw new Error(`Unkown article set ${id}`);
  }

  if (articles === undefined) {
    // TODO Improve this UX
    return <div>Loading...</div>;
  }

  const articlesInSet = articles
    .filter((article) => article.series && article.series.id === id)

  return <Series articles={articlesInSet} series={series} />;
};

export { SeriesView as default };
