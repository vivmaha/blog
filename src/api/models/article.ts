import { ArticleSummary } from "./article-summary";

// TODO Importt his type from the server project
export type Article = ArticleSummary & {
  content: string;
};
