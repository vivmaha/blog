import * as React from "react";

import {
  ArticleContentQuote,
  ArticleContentHtml,
  ArticleContent,
} from "../models/IArticleContent";

import ArticleBlockQuote from "./ArticleBlockQuote";

class ArticleMaterializer {
  private key = 0;

  public getKey(): number {
    return this.key + 1;
  }

  private static materializeArticleQuote(
    data: ArticleContentQuote
  ): JSX.Element {
    return (
      <ArticleBlockQuote
        quote={data.quote}
        person={data.person}
        personTitle={data.personTitle}
      />
    );
  }

  private static materializeHtml(data: ArticleContentHtml): JSX.Element {
    // This html comes from my own code.
    // eslint-disable-next-line react/no-danger
    return <div dangerouslySetInnerHTML={{ __html: data.content }} />;
  }

  static materialize(data: ArticleContent) {
    if (!data) {
      return null;
    }
    switch (data.type) {
      case "article-quote":
        return ArticleMaterializer.materializeArticleQuote(
          data as ArticleContentQuote
        );
      case "html":
        return ArticleMaterializer.materializeHtml(data as ArticleContentHtml);
      default:
        throw new Error(`Unexpected data type ${data.type}`);
    }
  }
}

interface Props {
  data: ArticleContent;
}

const ArticleFreeform = (props: Props) => {
  return ArticleMaterializer.materialize(props.data);
};

export { ArticleFreeform as default };
