import * as React from "react";

import "./ArticleCaption.scss";

export interface Props extends React.HTMLProps<HTMLDivElement>{
}

export var ArticleCaption: React.StatelessComponent<Props> = (props: Props) => {
    return (
        <section className="article-caption">{props.children}</section>
    );
}