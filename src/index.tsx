import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ArticlePage } from "./pages/ArticlePage";
import { SeriesPage } from "./pages/SeriesPage";
import { ScrollToTop } from "./components/ScrollToTop";

import "./index.scss";

render(
  <BrowserRouter>
    <ScrollToTop />
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/article/:id" component={ArticlePage} />
      <Route path="/series/:id" component={SeriesPage} />
    </div>
  </BrowserRouter>,
  document.getElementById("content")
);
