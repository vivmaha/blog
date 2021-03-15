import * as React from "react";
import { Series } from "../api/models/series";

import Articles from "./Articles";

interface Props {
  series: Series
}

const Home: React.FC<Props> = ({ series }) => {
  return (
    <Articles
      articles={series.articles}
      introduction={series.introduction}
      bannerTitle={series.title}
      bannerLink={{
        url: "/article/about",
        text: "About",
      }}
      backgroundImageUrl={series.backgroundImageUrl}
    />
  );
};

export { Home as default };
