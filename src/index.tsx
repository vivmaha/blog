import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { Article } from "./components/Article";
import aboutArticle from "./content/articles/about";

import { HomeView } from "./views/HomeView";
import { ArticleView } from "./views/ArticleView";
import { ArticleSetView } from "./views/ArticleSetView";
import { store } from "./redux/Store";

import "./index.scss";

render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={HomeView} />
        <Route path="/article/:id" component={ArticleView} />
        <Route path="/series/:id" component={ArticleSetView} />
        <Route
          path="/about"
          render={() => <Article article={aboutArticle} />}
        />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("content")
);
