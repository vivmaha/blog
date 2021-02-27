import * as React from "react";

import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";

import ArticleModel from "../models/IArticle";
import ArticleSetModel from "../models/IArticleSet";

import ArticleSet from "../components/ArticleSet";

import { State } from "../redux/State";

import { Articles as ApiArticles } from "../api/get-articles";

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

const ArticleSetView = connect(mapStateToProps)(
  ({ articles, articleSets, match }: Props) => {
    const articleSetId = match.params.id;

    const articleSet = articleSets.get(articleSetId);

    if (!articleSet) {
      throw new Error("articleSet is undefined");
    }

    const articlesInSet = [...articles.values()]
      .filter((article) => article.articleSetId === articleSetId)
      .reverse();

    const apiArticles: ApiArticles = {
      articles: articlesInSet.map((articleInSet) => ({
        date: articleInSet.date.toISOString(),
        id: articleInSet.id,
        preview: articleInSet.introduction.preview as string,
        title: articleInSet.title,
      })),
    };

    return <ArticleSet articles={apiArticles} articleSet={articleSet} />;
  }
);

export { ArticleSetView as default };
