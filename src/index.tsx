import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import { HomeView } from "./views/HomeView";
import { ArticleView } from "./views/ArticleView";
import { SeriesView } from "./views/SeriesView";
import "./index.scss";
import { ScrollToTop } from "./components/ScrollToTop";

render(
  <BrowserRouter>
    <ScrollToTop />
    <div>
      <Route exact path="/" component={HomeView} />
      <Route path="/article/:id" component={ArticleView} />
      <Route path="/series/:id" component={SeriesView} />
    </div>
  </BrowserRouter>,
  document.getElementById("content")
);
