import { ArticleSummary } from "./article-summary";

// TODO - Import this type from the server project.
export type Series = {
  title: string;
  id: string;
  introduction: string;
  articles: ArticleSummary[];
};
