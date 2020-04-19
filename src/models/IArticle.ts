import { ArticleContent } from "./IArticleContent";

interface Article {
  title: string;
  date: Date;
  id: string;
  introduction: {
    // Used to show a summary of the article
    preview?: string;
    // Concatenated with {preview} and placed at the beginning of the article.
    extended: ArticleContent;
  };
  articleSetId?: string;
  sections: ArticleContent[][];
  nextArticleId?: string;
  previousArticleId?: string;
}

export type { Article as default };
