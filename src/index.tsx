import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from 'react-redux'


import { Home } from "./views/Home";
import { ArticleView } from "./views/ArticleView";
import { ArticleSetView } from "./views/ArticleSetView";
import { store } from "./redux/Store";

import { ScrollToTop } from "./components/ScrollToTop";

import "./index.scss";

render(
    (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <ScrollToTop />
            <Route exact path="/" component={Home} />
            <Route path="/article/:id" component={ArticleView} />
            <Route path="/series/:id" component={ArticleSetView} />
          </div>
        </BrowserRouter>
      </Provider>
    ),
    document.getElementById("content")
);