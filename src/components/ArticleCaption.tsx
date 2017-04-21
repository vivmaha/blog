import * as React from "react";

import "./ArticleCaption.scss";

export interface Props extends React.HTMLProps<HTMLDivElement>{
}

export var ArticleCaption: React.StatelessComponent<Props> = (props: Props) => {
    return (
        <p className="article-caption">{props.children}</p>
    );
}