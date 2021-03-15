import moment from "moment";

import React from "react";
import { Helmet } from "react-helmet";

import ArticleFreeform from "./ArticleFreeform";
import ArticleSetSummary from "./ArticleSetSummary";
import { Header } from "./Header";

import { ArticleContent } from "../models/IArticleContent";
import { Article as ArticleModel } from "../api/models/article";

import "./Article.scss";

interface Props {
  article: ArticleModel;
}

const Article: React.FC<Props> = ({ article }) => {
  const friendlyDate = moment(article.date).format("MMM Do, YYYY");

  const materializeSections = (sections: ArticleContent[][]): JSX.Element[] => {
    return sections.map((section) => {
      return (
        <section>
          {section.map((sectionData) => (
            <ArticleFreeform data={sectionData} />
          ))}
        </section>
      );
    });
  };

  return (
    <div className="body-container">
      <Helmet title={article.title} />
      <Header />
      <main>
        <article>
          <header>
            <h1>{article.title}</h1>
            <p>by V Maharajh on {friendlyDate}</p>
            {article.articleSet ? (
              <ArticleSetSummary
                articleSet={article.articleSet}
              />
            ) : null}
          </header>
          {materializeSections(JSON.parse(article.content))}
          <footer>
            {article.articleSet ? (
              <ArticleSetSummary
                articleSet={article.articleSet}
                includeLinkToNextArticle
              />
            ) : null}
          </footer>
        </article>
      </main>
    </div>
  );
};

export { Article as default };
