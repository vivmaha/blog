import { IArticleContent } from './IArticleContent';

export interface IArticle {
    title: string;
    date: Date;
    id: string;
    introduction: {
        // Used to show a summary of the article
        preview: string;
        // Concatenated with {preview} and placed at the beginning of the article.
        extended: IArticleContent;
    }
    articleSetId: string;
    sections: IArticleContent[][];
    nextArticleId?: string;
    previousArticleId?: string;
}