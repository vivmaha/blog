import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";

import Article from "../components/Article";

import ArticleModel from "../models/IArticle";
import ArticleSetModel from "../models/IArticleSet";

import { State } from "../redux/State";

interface Props extends RouteComponentProps<{ id: string }> {
  articles: Map<string, ArticleModel>;
  articleSets: Map<string, ArticleSetModel>;
}

const mapStateToProps = (state: State) => {
  return {
    articles: state.articles.items,
    articleSets: state.articleSets.items,
  };
};

const ArticleViewInternal: React.FC<Props> = ({
  articles,
  articleSets,
  match,
}) => {
  const articleId = match.params.id;

  let currentArticle: ArticleModel | undefined;
  let nextArticle: ArticleModel | undefined;
  for (const article of [...articles.values()]) {
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

  let currentArticleSet: ArticleSetModel | undefined;
  for (const articleSet of [...articleSets.values()]) {
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
};

const ArticleView = connect(mapStateToProps)(ArticleViewInternal);

export { ArticleView as default };
