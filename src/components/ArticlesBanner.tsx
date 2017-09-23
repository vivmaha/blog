import * as React from "react";

import "./ArticlesBanner.scss";

export interface Props {
    backgroundImageUrl: string;
    title: string;
    content: JSX.Element;
    isTitleHidden: boolean;
}

export var ArticlesBanner: React.StatelessComponent<Props> = (props: Props) => {

    let bannerStyle = {
        backgroundImage: `url('${props.backgroundImageUrl}')`,
    }

    let bannerTitleStyle = {
        opacity: props.isTitleHidden ? 0 : 1,
    }

    return (
        <header
            className="articles-banner"
            style={bannerStyle}
        >
            <div 
                className="title body-container"
                style={bannerTitleStyle}
            >
                <h1>{props.title}</h1>
                {props.content}
            </div>
        </header>
    );
}