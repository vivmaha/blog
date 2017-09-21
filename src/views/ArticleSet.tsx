import { Helmet } from "react-helmet";
import * as React from "react";
import { connect } from 'react-redux';
import { IArticle } from "../models/IArticle";
import { IArticleSet } from "../models/IArticleSet";
import { Articles } from "../components/Articles";
import { RouteComponentProps } from "react-router";
import { ArticleMaterializer } from "./ArticleMaterializer";

import { State as redux_State} from "../redux/State";

interface Props extends  RouteComponentProps<any> {
    articles: { [id: string]: IArticle };
    articleSets: { [id: string]: IArticleSet };
}

const mapStateToProps = (state: redux_State) => {
    return {
        articles: state.articles.items,
        articleSets: state.articleSets.items,
    }
}

export var ArticleSet = connect(mapStateToProps)((props: Props) => {
    let articleSetId = props.match.params.id;

    let articleSet = props.articleSets[articleSetId];

    let articles: IArticle[] = [];    
    for (let articleKey in props.articles) {
        let article = props.articles[articleKey];
        if (article.articleSetId == articleSetId) {            
            // This incidentally reverses the chronological order of the articles, which is desired.
            articles.push(article);
        }
    }

    let articleMaterializer = new ArticleMaterializer();

    return (
        <Articles 
            articles={articles}
            bannerContent={articleMaterializer.materialize(articleSet.introduction)}
            bannerTitle={articleSet.title}
            backgroundImageUrl={articleSet.backgroundImageUrl}
        />
    );
});