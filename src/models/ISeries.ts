import { ArticleContent } from "./IArticleContent";

interface Series {
  title: string;
  id: string;
  backgroundImageUrl: string;
  introduction: ArticleContent;
}

export type { Series as default };
