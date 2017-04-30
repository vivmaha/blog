import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import { Home } from "./views/Home";
import { Article } from "./views/Article";
import { ArticleSet } from "./views/ArticleSet";

import "./index.scss";

render(
    (
        /**
         * Since this page handles all routing, the web server has to be configured to 
         * redirect all page requests to this page instead. This is done in the web.config
         */
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/article/:id" component={Article} />
            <Route path="/series/:id" component={ArticleSet} />
          </div>
        </BrowserRouter>
    ),
    document.getElementById("content")
);