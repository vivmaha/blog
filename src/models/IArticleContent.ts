// Serializable building block for article content
export interface IArticleContent {
    type: string;
}

export interface IArticleContentQuote extends IArticleContent {
    quote: string;
    person: string;
    personTitle?: string;
}

export interface IArticleContentHtml extends IArticleContent {
    content: string;
}
