import * as React from "react";

import { Articles } from "../components/Articles";

import { IArticle } from "../models/IArticle";
import { IArticleSet } from "../models/IArticleSet";

import { ArticleMaterializer } from "../views/ArticleMaterializer";

interface Props {
    articles: IArticle[];
    articleSet: IArticleSet;
}

export var ArticleSet = (props: Props) => {
    let articleMaterializer = new ArticleMaterializer();

    return (
        <Articles 
            articles={props.articles}
            bannerContent={articleMaterializer.materialize(props.articleSet.introduction)}
            bannerTitle={props.articleSet.title}
            backgroundImageUrl={props.articleSet.backgroundImageUrl}
        />
    );
};