import * as React from "react";

import {
    IArticleContentQuote,
    IArticleContentHtml,
    IArticleContent,    
} from "../models/IArticleContent";

import { IArticle } from "../models/IArticle";

import { ArticleBlockQuote } from "../components/ArticleBlockQuote";

export class ArticleMaterializer {

    private key: number = 0;

    public getKey(): number {
        return this.key++;
    }

    private materializeArticleQuote(data: IArticleContentQuote): JSX.Element {
        return <ArticleBlockQuote
            quote={data.quote}
            person={data.person}
            personTitle={data.personTitle}
        ></ArticleBlockQuote>;
    }

    private materializeHtml(data: IArticleContentHtml): JSX.Element {        
        return (
            <div dangerouslySetInnerHTML={{__html: data.content}}></div>
        )
    }

    materialize(data: IArticleContent, key?: string): JSX.Element {
        if (!data) {
            return;
        }
        switch (data.type) {
            case "article-quote": return this.materializeArticleQuote(data as IArticleContentQuote);
            case "html": return this.materializeHtml(data as IArticleContentHtml);
            default: console.error(`Unexpected data type ${data.type}`);
        }
    }
}