import * as React from "react";

import Articles from "./Articles";
import ArticleFreeform from "./ArticleFreeform";

import ArticleModel from "../models/IArticle";
import ArticleSetModel from "../models/IArticleSet";

interface Props {
  articles: ArticleModel[];
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
