import * as React from "react";

import "./ArticleBlockQuote.scss";

export interface Props {
    quote: string;
    person: string;
    personTitle?: string;
}

export var ArticleBlockQuote: React.StatelessComponent<Props> = (props: Props) => {
    let titleString = props.personTitle ? `, ${props.personTitle}` : '';
    return (
        <section className="article-block-quote">
            <blockquote>{props.quote}</blockquote>
            <p className="no-margin-top"><strong>{props.person}</strong>{titleString}</p>
        </section>
    );
}