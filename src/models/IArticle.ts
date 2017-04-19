export interface IArticle {
    title: string;
    date: Date;
    id: string;
    // Used to show a summary of the article
    introductionPart1: string;
    // Concatenated with {introductionPart1} and placed at the beginning of the article.
    introductionPart2: JSX.Element;
    sections : JSX.Element[];
    articleSetId?: string;
}