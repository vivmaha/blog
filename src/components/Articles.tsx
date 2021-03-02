import { Helmet } from "react-helmet";
import * as React from "react";

import { ArticlesBanner, ArticlesBannerLink } from "./ArticlesBanner";

import "./Articles.scss";
import { ArticleSummary as ArticleSummaryModel } from "../api/models/article-summary";
import ArticleSummary from "./ArticleSummary";

export interface Props extends React.HTMLProps<HTMLDivElement> {
  articles: ArticleSummaryModel[];
  bannerTitle: string;
  introduction: string;
  bannerLink: ArticlesBannerLink;
  backgroundImageUrl: string;
}

const Articles: React.FC<Props> = ({
  articles,
  bannerTitle,
  introduction,
  bannerLink,
  backgroundImageUrl,
}) => (
  <main className="articles">
    <Helmet title={bannerTitle} />
    <ArticlesBanner
      backgroundImageUrl={backgroundImageUrl}
      content={<p style={{ whiteSpace: "pre-line" }}>{introduction}</p>}
      title={bannerTitle}
      link={bannerLink}
    />
    <article className="body-container no-margin-top">
      <ol>
        {articles.map((article) => (
          <li key={article.id}>
            <ArticleSummary article={article} />
          </li>
        ))}
      </ol>
    </article>
  </main>
);

export { Articles as default };
