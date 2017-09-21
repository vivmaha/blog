import * as React from "react";

import { Articles } from "../components/Articles";

import { IArticle } from "../models/IArticle";

interface Props {
    articles: IArticle[];
}

export var Home = (props: Props) => {
    let bannerContent = <p className="no-margin-top">A place to store my notes.</p>;
    return (
        <Articles 
            articles={props.articles} 
            bannerContent={bannerContent}
            bannerTitle="Notes by V"
            backgroundImageUrl="https://notesbyvmedia.blob.core.windows.net/images/pen-idea-bulb-paper-web-optimized.jpg"
        />
    );
};