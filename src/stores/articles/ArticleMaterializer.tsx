import * as React from "react";

import {
    IArticleQuoteData,
    IArticleData,
    IArticleDataHtml,
    IData,    
} from "../../models/IArticleData";

import { IArticle } from "../../models/IArticle";

import { ArticleBlockQuote } from "../../components/ArticleBlockQuote";

export class ArticleMaterializer {

    private key: number = 0;

    private getKey(): number {
        return this.key++;
    }

    materializeSections(sections: IData[][]): JSX.Element[] {
        return sections.map(section => {
            return <section key={this.getKey()}>{
                    section.map(sectionData => this.materializeData(sectionData))
                }</section>
        });
    }

    materializeArticleQuote(data: IArticleQuoteData): JSX.Element {
        return <ArticleBlockQuote
            quote={data.quote}
            person={data.person}
            personTitle={data.personTitle}
        ></ArticleBlockQuote>;
    }

    materializeHtml(data: IArticleDataHtml): JSX.Element {        
        return (
            <div dangerouslySetInnerHTML={{__html: data.content}}></div>
        )
    }

    materializeData(data: IData, key?: string): JSX.Element {
        switch (data.type) {
            case "article-quote": return this.materializeArticleQuote(data as IArticleQuoteData);
            case "html": return this.materializeHtml(data as IArticleDataHtml);
            default: console.error(`Unexpected data type ${data.type}`);
        }
    }

    materialize(articleData: IArticleData): IArticle {
        let article: IArticle = {
            title: articleData.title,
            date: articleData.date,
            id: articleData.id,
            introductionPart1: articleData.introduction.preview,
            introductionPart2: this.materializeData(articleData.introduction.extended),
            articleSetId: articleData.articleSetId,
            sections: this.materializeSections(articleData.sections),
        }
        return article;
    }
}