import * as React from "react";
import { RouteComponentProps } from "react-router";
import { connect } from "react-redux";

import Home from "../components/Home";

import Article from "../models/IArticle";

import { State } from "../redux/State";

interface Props extends RouteComponentProps {
  articles: Map<string, Article>;
}

const mapStateToProps = (state: State) => {
  return {
    articles: state.articles.items,
  };
};

const HomeView = connect(mapStateToProps)((props: Props) => {
  let articles = [...props.articles.values()];
  articles = articles.reverse();
  return <Home articles={articles} />;
});

export { HomeView as default };
