import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSeries } from "../api/get-series";
import { Series as SeriesModel } from "../api/models/series";

import Series from "../components/Series";

const SeriesView: React.FC = () => {
  const {id} = useParams<{id: string}>();
  const [series, setSeries] = useState<SeriesModel>();

  useEffect(() => {
    getSeries(id).then(setSeries);
  }, [id]);
  
  if (series === undefined) {
    // TODO Improve this UX
    return <div>Loading...</div>;
  }

  return <Series articles={series.articles} series={series} />;
};

export { SeriesView as default };
