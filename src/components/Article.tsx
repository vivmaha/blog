import moment from "moment";

import React from "react";
import { Helmet } from "react-helmet";

import ArticleFreeform from "./ArticleFreeform";
import ArticleSetSummary from "./ArticleSetSummary";
import { Header } from "./Header";

import { ArticleContent } from "../models/IArticleContent";
import ArticleModel from "../models/IArticle";
import ArticleSetModel from "../models/IArticleSet";

import "./Article.scss";

interface Props {
  article: ArticleModel;
  nextArticle?: ArticleModel;
  articleSet?: ArticleSetModel;
}

const Article: React.FC<Props> = ({ article, nextArticle, articleSet }) => {
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
            <p>{article.introduction.preview}</p>
            <ArticleFreeform data={article.introduction.extended} />
            {articleSet ? (
              <ArticleSetSummary
                articleSet={articleSet}
                nextArticle={nextArticle}
              />
            ) : null}
          </header>
          {materializeSections(article.sections)}
          <footer>
            {articleSet ? (
              <ArticleSetSummary
                articleSet={articleSet}
                nextArticle={nextArticle}
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
