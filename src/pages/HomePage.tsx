import * as React from "react";
import { Series } from "../components/Series";

export const HomePage: React.FC = () => (
  <Series
    id="home"
    bannerLink={{
      url: "/article/about",
      text: "About",
    }}
  />
);
