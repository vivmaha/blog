import { Helmet } from "react-helmet";
import * as React from "react";

import ArticleModel from "../models/IArticle";
import ArticleSummary from "./ArticleSummary";
import { ArticlesBanner, ArticlesBannerLink } from "./ArticlesBanner";

import "./Articles.scss";

export interface Props extends React.HTMLProps<HTMLDivElement> {
  articles: ArticleModel[];
  bannerTitle: string;
  bannerContent: JSX.Element;
  bannerLink: ArticlesBannerLink;
  backgroundImageUrl: string;
}

const Articles: React.FC<Props> = ({
  articles,
  bannerTitle,
  bannerContent,
  bannerLink,
  backgroundImageUrl,
}) => (
  <main className="articles">
    <Helmet title={bannerTitle} />
    <ArticlesBanner
      backgroundImageUrl={backgroundImageUrl}
      content={bannerContent}
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
