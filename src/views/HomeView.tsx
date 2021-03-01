import * as React from "react";

import { useEffect, useState } from "react";
import { getSeries } from "../api/get-series";
import { Series } from "../api/models/series";
import Home from "../components/Home";



const HomeView: React.FC = () => {
  const [series, setSeries] = useState<Series>();

  useEffect(() => {
    getSeries("home").then(setSeries);
  }, []);

  if (series === undefined) {
    // TODO Improve this UX
    return <div>Loading...</div>;
  }
  return <Home series={series} />;
};

export { HomeView as default };
