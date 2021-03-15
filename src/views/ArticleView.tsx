import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";

import { Article } from "../components/Article";

import { IArticle } from "../models/IArticle";
import { IArticleSet } from "../models/IArticleSet";

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

export var ArticleView = connect(mapStateToProps)((props: Props) => {
  let articleId = props.match.params.id;

  let currentArticle: IArticle | undefined;
  let nextArticle: IArticle | undefined;
  for (let articleKey in props.articles) {
    let article = props.articles[articleKey];
    if (article.id === articleId) {
      currentArticle = article;
    } else if (currentArticle) {
      nextArticle = article;
      break;
    }
  }

  if (!currentArticle) {
    throw new Error("Current article is undefined.");
  }

  let currentArticleSet: IArticleSet | undefined;
  for (let articleSetKey in props.articleSets) {
    let articleSet = props.articleSets[articleSetKey];
    if (articleSet.id === currentArticle.articleSetId) {
      currentArticleSet = articleSet;
    }
  }

  if (!currentArticleSet) {
    throw new Error("Current article set is undefined.");
  }

  return (
    <Article
      article={currentArticle}
      nextArticle={nextArticle}
      articleSet={currentArticleSet}
    />
  );
});
