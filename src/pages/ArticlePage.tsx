import moment from "moment";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import ArticleFreeform from "../components/ArticleFreeform";
import SeriesSummary from "../components/SeriesSummary";
import { Header } from "../components/Header";
import { getArticle } from "../api/get-article";
import { FullPageSpinner } from "../components/FullPageSpinner";
import { ArticleContent } from "../models/IArticleContent";
import { Article as ArticleModel } from "../api/models/article";

import "./ArticlePage.scss";

export const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<ArticleModel>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    getArticle(id)
      .then(setArticle)
      .catch((e) => setError(e.toString()));
  }, [id]);

  if (error !== undefined) {
    return <pre>{error}</pre>;
  }
  if (article === undefined) {
    return <FullPageSpinner />;
  }

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
            {article.series ? <SeriesSummary series={article.series} /> : null}
          </header>
          {materializeSections(JSON.parse(article.content))}
          <footer>
            {article.series ? (
              <SeriesSummary series={article.series} includeLinkToNextArticle />
            ) : null}
          </footer>
        </article>
      </main>
    </div>
  );
};
