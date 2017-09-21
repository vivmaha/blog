import * as Moment from "moment";

import * as React from "react";
import { connect } from 'react-redux';
import { RouteComponentProps } from "react-router";

import { Article } from "../components/Article";

import { IArticle } from "../models/IArticle";
import { IArticleSet } from "../models/IArticleSet";

import { State } from "../redux/State";

interface Props extends  RouteComponentProps<any> {
    articles: { [id: string]: IArticle },
    articleSets: { [id: string]: IArticleSet },
}

const mapStateToProps = (state: State) => {
    return {
        articles: state.articles.items,
        articleSets: state.articleSets.items,
    }
}

export var ArticleView = connect(mapStateToProps)((props: Props) => {
    let articleId = props.match.params.id;

    let currentArticle: IArticle = null;
    let nextArticle: IArticle = null;
    for (let articleKey in props.articles) {
        let article = props.articles[articleKey];
        if (article.id == articleId) {
            currentArticle = article;
        }        
        else if (currentArticle != null) {
            nextArticle = article;
            break;
        }
    }

    let currentArticleSet: IArticleSet = null;
    for (let articleSetKey in props.articleSets) {
        let articleSet = props.articleSets[articleSetKey];
        if (articleSet.id == currentArticle.articleSetId) {
            currentArticleSet = articleSet;
        }
    }

    return (
        <Article 
            article={currentArticle}
            nextArticle={nextArticle}
            articleSet={currentArticleSet}
        />
    );
});