import * as React from "react";

import {
  IArticleContentQuote,
  IArticleContentHtml,
  IArticleContent,
} from "../models/IArticleContent";

import { ArticleBlockQuote } from "../components/ArticleBlockQuote";

class ArticleMaterializer {
  private key: number = 0;

  public getKey(): number {
    return this.key++;
  }

  private materializeArticleQuote(data: IArticleContentQuote): JSX.Element {
    return (
      <ArticleBlockQuote
        quote={data.quote}
        person={data.person}
        personTitle={data.personTitle}
      ></ArticleBlockQuote>
    );
  }

  private materializeHtml(data: IArticleContentHtml): JSX.Element {
    return <div dangerouslySetInnerHTML={{ __html: data.content }}></div>;
  }

  materialize(data: IArticleContent, key?: string) {
    if (!data) {
      return null;
    }
    switch (data.type) {
      case "article-quote":
        return this.materializeArticleQuote(data as IArticleContentQuote);
      case "html":
        return this.materializeHtml(data as IArticleContentHtml);
      default:
        throw new Error(`Unexpected data type ${data.type}`);
    }
  }
}

interface Props {
  data: IArticleContent;
}

export var ArticleFreeform = (props: Props) => {
  let articleMaterializer = new ArticleMaterializer();
  return articleMaterializer.materialize(props.data);
};
