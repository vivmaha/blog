import { getConfig } from "../app/config";
import { Article } from "./models/article";

type ArticleResponse = {
  article: Article;
};

export const getArticle = async (id: string): Promise<Article> => {
  const httpResponse = await fetch(`${getConfig().api}/article/${id}`);
  const articleResponse = (await httpResponse.json()) as ArticleResponse;
  return articleResponse.article;
};
