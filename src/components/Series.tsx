import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { getSeries } from "../api/get-series";

import { Series as SeriesModel } from "../api/models/series";
import { getConfig } from "../app/config";
import { SeriesBanner } from "./SeriesBanner";
import ArticleSummary from "./ArticleSummary";
import { FullPageSpinner } from "./FullPageSpinner";

import "./Series.scss";

export type SeriesProps = {
  id: string;
  bannerLink: {
    url: string;
    text: string;
  };
};

export const Series: React.FC<SeriesProps> = ({ id, bannerLink }) => {
  const [series, setSeries] = useState<SeriesModel>();

  useEffect(() => {
    getSeries(id).then(setSeries);
  }, [id]);

  if (series === undefined) {
    return <FullPageSpinner />;
  }

  const heroUrl = `${getConfig().media}/series/${
    series.id
  }/hero-web-optimized.jpg`;
  return (
    <main className="series">
      <Helmet title={series.title} />
      <SeriesBanner
        heroUrl={heroUrl}
        content={
          <p style={{ whiteSpace: "pre-line" }}>{series.introduction}</p>
        }
        title={series.title}
        link={bannerLink}
      />
      <article className="body-container no-margin-top">
        <ol>
          {series.articles.map((article) => (
            <li key={article.id}>
              <ArticleSummary article={article} />
            </li>
          ))}
        </ol>
      </article>
    </main>
  );
};
