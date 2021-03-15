import * as React from "react";

import "./ArticleBlockQuote.scss";

export interface Props {
  quote: string;
  person: string;
  personTitle?: string;
}

export default ({ quote, person, personTitle }: Props) => {
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
