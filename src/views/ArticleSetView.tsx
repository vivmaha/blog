import * as React from "react";

import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";

import { IArticle } from "../models/IArticle";
import { IArticleSet } from "../models/IArticleSet";

import { ArticleSet } from "../components/ArticleSet";

import { State } from "../redux/State";

interface Props extends RouteComponentProps<any> {
  articles: { [id: string]: IArticle };
  articleSets: { [id: string]: IArticleSet };
}

const mapStateToProps = (state: State) => {
  return {
    articles: state.articles.items,
    articleSets: state.articleSets.items,
  };
};

export var ArticleSetView = connect(mapStateToProps)((props: Props) => {
  let articleSetId = props.match.params.id;

  let articleSet = props.articleSets[articleSetId];

  let articles: IArticle[] = [];
  for (let articleKey in props.articles) {
    let article = props.articles[articleKey];
    if (article.articleSetId === articleSetId) {
      // This incidentally reverses the chronological order of the articles, which is desired.
      articles.push(article);
    }
  }

  return <ArticleSet articles={articles} articleSet={articleSet}></ArticleSet>;
});
