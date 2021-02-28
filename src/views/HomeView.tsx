import * as React from "react";

import { useEffect, useState } from "react";
import { getArticles } from "../api/get-article";
import { ArticleSummary } from "../api/models/article-summary";
import Home from "../components/Home";



const HomeView: React.FC = () => {
  const [articles, setArticles] = useState<ArticleSummary[]>();

  useEffect(() => {
    getArticles().then(setArticles);
  }, []);

  if (articles === undefined) {
    // TODO Improve this UX
    return <div>Loading...</div>;
  }
  return <Home articles={articles} />;
};

export { HomeView as default };
