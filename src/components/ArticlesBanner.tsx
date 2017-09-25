import * as React from "react";
import { Link } from 'react-router-dom';

import "./ArticlesBanner.scss";

export interface ArticlesBannerLink {
    url: string;
    text: string;
}

export interface Props {
    backgroundImageUrl: string;
    title: string;
    content: JSX.Element;
    link: ArticlesBannerLink;
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
            <div className="content body-width">
                <div className="title">
                    <h1>{props.title}</h1>
                    {props.content}
                </div>
                <Link className="link" to={props.link.url}>{props.link.text}</Link>
            </div>
        </header>
    );
}