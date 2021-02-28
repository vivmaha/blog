import * as React from "react";
import { ArticleSummary } from "../api/models/article-summary";

import Articles from "./Articles";

interface Props {
  articles: ArticleSummary[];
}

const Home: React.FC<Props> = ({ articles }) => {
  return (
    <Articles
      articles={articles}
      introduction="A place to store my notes."
      bannerTitle="Notes by V"
      bannerLink={{
        url: "/article/about",
        text: "About",
      }}
      backgroundImageUrl="https://notesbyvmedia.blob.core.windows.net/images/pen-idea-bulb-paper-web-optimized.jpg"
    />
  );
};

export { Home as default };
