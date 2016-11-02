import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ReactRouter from "react-router";

import { Home } from "./views/Home";
import { Article } from "./views/Article";

import "./index.scss";

ReactDOM.render(
    (
        /* TODO: When you deploy this to a real server, you have to setup URL redirection, so that everythign gets redirected to index.html */
        <ReactRouter.Router history={ReactRouter.browserHistory}>
            <ReactRouter.Route path="/" component={Home} />
            <ReactRouter.Route path="/article/:articleId" component={Article} />
        </ReactRouter.Router>
    ),
    document.getElementById("content")
);