import * as React from "react";

import Articles from "./Articles";
import ArticleFreeform from "./ArticleFreeform";

import ArticleSetModel from "../models/IArticleSet";

import { Articles as ApiArticles } from "../api/get-articles";

interface Props {
  articles: ApiArticles;
  articleSet: ArticleSetModel;
}

const ArticleSet: React.FC<Props> = ({ articles, articleSet }) => {
  const bannerContent = <ArticleFreeform data={articleSet.introduction} />;

  return (
    <Articles
      articles={articles}
      bannerContent={bannerContent}
      bannerLink={{
        url: "/",
        text: "Home",
      }}
      bannerTitle={articleSet.title}
      backgroundImageUrl={articleSet.backgroundImageUrl}
    />
  );
};

export { ArticleSet as default };
