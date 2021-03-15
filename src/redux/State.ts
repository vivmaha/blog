import Article from "../models/IArticle";
import ArticleSet from "../models/IArticleSet";

export interface ListState<T> {
  items: Map<string, T>;
}

export interface State {
  articles: ListState<Article>;
  articleSets: ListState<ArticleSet>;
}
