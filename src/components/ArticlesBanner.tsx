import * as React from "react";

import "./ArticlesBanner.scss";

export interface Props {
    backgroundImageUrl: string;
    title: string;
    content: JSX.Element;
}

export var ArticlesBanner: React.StatelessComponent<Props> = (props: Props) => {

    let bannerStyle = {
        backgroundImage: `url('${props.backgroundImageUrl}')`,
    }

    return (
        <header
            className="articles-banner"
            style={bannerStyle}
        >
            <div className="title body-width">
                <h1>{props.title}</h1>
                {props.content}
            </div>
        </header>
    );
}