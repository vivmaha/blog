import * as React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory } from "react-router";

import { Home } from "./views/Home";
import { Article } from "./views/Article";

import "./index.scss";

browserHistory.listen(location => {
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

render(
    (
        /**
         * Since this page handles all routing, the web server has to be configured to 
         * redirect all page requests to this page instead. This is done in the web.config
         */
        <Router history={browserHistory}>
            <Route path="/" component={Home} />
            <Route path="/article/:articleId" component={Article} />
        </Router>
    ),
    document.getElementById("content")
);