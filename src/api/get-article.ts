import { getConfig } from "../app/config";
import { ArticleSummary as ApiArticleSummary } from "./models/article-summary";

export type ArticleSummary = ApiArticleSummary;

type ArticlesResponse = {
  articles: ArticleSummary[];
};

export const getArticles = async (): Promise<ArticleSummary[]> => {
  const httpResponse = await fetch(`${getConfig().api}/articles`);
  const articlesResponse = (await httpResponse.json()) as ArticlesResponse;
  return articlesResponse.articles;
};
