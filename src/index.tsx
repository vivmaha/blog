import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ReactRouter from "react-router";

import { Home } from "./views/Home";
import { Article } from "./views/Article";

import "./index.scss";

var history = ReactRouter.browserHistory;

history.listen(location => {
  // Use setTimeout to make sure this runs after React Router's own listener
  setTimeout(() => {
    // Keep default behavior of restoring scroll position when user:
    // - clicked back button
    // - clicked on a link that programmatically calls `history.goBack()`
    // - manually changed the URL in the address bar (here we might want
    // to scroll to top, but we can't differentiate it from the others)
    if (location.action === 'POP') {
      return;
    }
    // In all other cases, scroll to top
    window.scrollTo(0, 0);
  });
});

ReactDOM.render(
    (
        /* TODO: When you deploy this to a real server, you have to setup URL redirection, so that everythign gets redirected to index.html */
        <ReactRouter.Router history={history}>
            <ReactRouter.Route path="/" component={Home} />
            <ReactRouter.Route path="/article/:articleId" component={Article} />
        </ReactRouter.Router>
    ),
    document.getElementById("content")
);