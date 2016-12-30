import * as React from "react";
import * as ReactRouter from 'react-router';

import "./ArticleBlockQuote.scss";

export interface Props {
    quote: string;
    person: string;
    personTitle: string;
}

export var ArticleBlockQuote: React.StatelessComponent<Props> = (props: Props) => {
    return (
        <section className="article-block-quote">
            <blockquote>{props.quote}</blockquote>
            <p><strong>{props.person}</strong>, {props.personTitle}</p>
        </section>
    );
}