import React from "react";
import { useEffect, useState } from "react";
import { getSeries } from "../api/get-series";

import { Series as SeriesModel } from "../api/models/series";
import Articles from "./Articles";
import { FullPageSpinner } from "./FullPageSpinner";

export type SeriesProps = {
    id: string;
    bannerLink: {
        url: string;
        text: string;
    }
}

export const Series: React.FC<SeriesProps> = ({id, bannerLink}) => {
    const [series, setSeries] = useState<SeriesModel>();

    useEffect(() => {
      getSeries(id).then(setSeries);
    }, [id]);
  
    if (series === undefined) {
      return <FullPageSpinner />
    }
    return (
      <Articles
        articles={series.articles}
        introduction={series.introduction}
        bannerTitle={series.title}
        bannerLink={bannerLink}
        backgroundImageUrl={series.backgroundImageUrl}
      />
    );
}