// TODO - Import type from blog-server module
import { ArticleSummary } from "./article-summary";

export type Article = ArticleSummary & {
  content: string;
  articleSetId?: string;
  nextArticleId?: string;
  previousArticleId?: string;
};
