import { ArticleContent } from "./IArticleContent";

interface ArticleSet {
  title: string;
  id: string;
  backgroundImageUrl: string;
  introduction: ArticleContent;
}

export type { ArticleSet as default };
