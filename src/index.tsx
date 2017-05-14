import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import { Home } from "./views/Home";
import { Article } from "./views/Article";
import { ArticleSet } from "./views/ArticleSet";

import { ScrollToTop } from "./components/ScrollToTop";

import "./index.scss";

render(
    (
        <BrowserRouter>
          <div>
            <ScrollToTop />
            <Route exact path="/" component={Home} />
            <Route path="/article/:id" component={Article} />
            <Route path="/series/:id" component={ArticleSet} />
          </div>
        </BrowserRouter>
    ),
    document.getElementById("content")
);