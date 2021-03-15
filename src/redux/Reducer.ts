import { combineReducers, Reducer } from "redux";
import { State, ListState } from "./State";

import Article from "../models/IArticle";
import ArticleSet from "../models/IArticleSet";

import contentArticles from "../content/articles/Articles";
import contentArticleSets from "../content/article-sets/ArticleSets";

function createConstReducer<T>(initialState: T): Reducer<T> {
  return (state = initialState) => {
    return state;
  };
}

function createListState<T>(
  items: T[],
  keySelector: (value: T) => string
): ListState<T> {
  return {
    items: new Map(items.map((item) => [keySelector(item), item])),
  };
}

const articles: Reducer<ListState<Article>> = createConstReducer(
  createListState<Article>(contentArticles, (article) => article.id)
);

const articleSets: Reducer<ListState<ArticleSet>> = createConstReducer(
  createListState<ArticleSet>(contentArticleSets, (articleSet) => articleSet.id)
);

const reducer = combineReducers<State>({
  articles,
  articleSets,
});

export { reducer as default };
