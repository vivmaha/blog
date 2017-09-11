export interface IData {
    type: string;
}

export interface IArticleQuoteData extends IData {
    quote: string;
    person: string;
    personTitle?: string;
}

export interface IArticleDataHtml extends IData {
    content: string;
}

export interface IArticleData extends IData {
    title: string;
    date: Date;
    id: string;
    introduction: {
        preview: string;
        extended: IData;
    }
    articleSetId: string;
    sections: IData[][];
} 