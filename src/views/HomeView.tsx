import * as React from "react";

import { useEffect, useState } from "react";
import Home from "../components/Home";

import { Articles, getArticles } from "../api/get-articles";

const HomeView: React.FC = () => {
  const [articles, setArticles] = useState<Articles>();

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
