import * as Moment from "moment";

import * as React from "react";
import { connect } from 'react-redux';
import { RouteComponentProps } from "react-router";

import { Article } from "../components/Article";

import { IArticle } from "../models/IArticle";

import { State } from "../redux/State";

interface Props extends  RouteComponentProps<any> {
    articles: {
        [id: string]: IArticle
    }
}

const mapStateToProps = (state: State) => {
    return {
        articles: state.articles.items
    }
}

export var ArticleView = connect(mapStateToProps)((props: Props) => {
    let articleId = props.match.params.id;    
    let article = props.articles[articleId];
    return <Article {...article}></Article>
});