import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import HomeView from "./views/HomeView";
import { ArticleView } from "./views/ArticleView";
import ArticleSetView from "./views/ArticleSetView";
import store from "./redux/Store";

import "./index.scss";
import { ScrollToTop } from "./components/ScrollToTop";

render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
      <div>
        <Route exact path="/" component={HomeView} />
        <Route path="/article/:id" component={ArticleView} />
        <Route path="/series/:id" component={ArticleSetView} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("content")
);
