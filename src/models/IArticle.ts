export interface IArticle {
    title: string;
    date: Date;
    id: string;
    author: string;
    introduction : JSX.Element;
    sections : JSX.Element[];
}