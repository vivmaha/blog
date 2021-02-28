import * as React from "react";

import Articles from "./Articles";
import ArticleFreeform from "./ArticleFreeform";

import SeriesModel from "../models/ISeries";

import { ArticleSummary as ArticleSummaryModel } from "../api/models/article-summary";

interface Props {
  articles: ArticleSummaryModel[];
  series: SeriesModel;
}

const Series: React.FC<Props> = ({ articles, series }) => {

  return (
    <Articles
      articles={articles}
      introduction={series.introduction}
      bannerLink={{
        url: "/",
        text: "Home",
      }}
      bannerTitle={series.title}
      backgroundImageUrl={series.backgroundImageUrl}
    />
  );
};

export { Series as default };
