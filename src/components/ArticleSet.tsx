import * as React from "react";

import { Articles } from "../components/Articles";
import { ArticleFreeform } from "../components/ArticleFreeform";

import { IArticle } from "../models/IArticle";
import { IArticleSet } from "../models/IArticleSet";

interface Props {
    articles: IArticle[];
    articleSet: IArticleSet;
}

export var ArticleSet = (props: Props) => {
    let bannerContent = <ArticleFreeform data={props.articleSet.introduction}/>;

    return (
        <Articles 
            articles={props.articles}
            bannerContent={bannerContent}            
            bannerLink={{
                url: "/",
                text: "Home"
            }}
            bannerTitle={props.articleSet.title}
            backgroundImageUrl={props.articleSet.backgroundImageUrl}
        />
    );
};