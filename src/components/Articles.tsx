import { Helmet } from "react-helmet";
import * as React from "react";

import { IArticle } from "../models/IArticle";
import { ArticleSummary } from "./ArticleSummary";
import { ArticlesBanner, ArticlesBannerLink } from "./ArticlesBanner";

import "./Articles.scss";

export interface Props extends React.HTMLProps<HTMLDivElement> {
  articles: IArticle[];
  bannerTitle: string;
  bannerContent: JSX.Element;
  bannerLink: ArticlesBannerLink;
  backgroundImageUrl: string;
}

export class State {}

export class Articles extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = new State();
  }

  public render() {
    return (
      <main className="articles">
        <Helmet title={this.props.bannerTitle} />
        <ArticlesBanner
          backgroundImageUrl={this.props.backgroundImageUrl}
          content={this.props.bannerContent}
          title={this.props.bannerTitle}
          link={this.props.bannerLink}
        />
        <article className="body-container no-margin-top">
          <ol>
            {this.props.articles.map((article) => (
              <li key={article.id}>
                <ArticleSummary {...article} />
              </li>
            ))}
          </ol>
        </article>
      </main>
    );
  }
}
