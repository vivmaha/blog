// Serializable building block for article content
export interface ArticleContent {
  type: string;
}

export interface ArticleContentQuote extends ArticleContent {
  quote: string;
  person: string;
  personTitle?: string;
}

export interface ArticleContentHtml extends ArticleContent {
  content: string;
}
