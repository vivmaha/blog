import * as React from "react";

import "./ArticleBlockQuote.scss";

export interface Props {
  quote: string;
  person: string;
  personTitle?: string;
}

export const ArticleBlockQuote: React.FC<Props> = ({
  quote,
  person,
  personTitle,
}) => {
  const titleString = personTitle ? `, ${personTitle}` : "";
  return (
    <section className="article-block-quote">
      <blockquote>“{quote}”</blockquote>
      <p className="no-margin-top">
        —&nbsp;<strong>{person}</strong>
        {titleString}
      </p>
    </section>
  );
};
