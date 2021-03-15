import { getConfig } from "../app/config";
import { ArticleSummary as ApiArticleSummary } from "../models/article-summary";

export type ArticleSummary = ApiArticleSummary;

export type Articles = {
  articles: ArticleSummary[];
};

export const getArticles = async (): Promise<Articles> => {
  const response = await fetch(`${getConfig().api}/articles`);
  const articles = (await response.json()) as Articles;
  return articles;
};
