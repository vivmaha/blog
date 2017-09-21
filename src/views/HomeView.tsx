
import * as React from "react";
import { RouteComponentProps } from "react-router";
import { connect } from 'react-redux';

import { Home } from "../components/Home";

import { IArticle } from "../models/IArticle";

import { State } from "../redux/State";

interface Props extends RouteComponentProps<any> {
    articles: { [id: string]: IArticle };
}

const mapStateToProps = (state: State) => {
    return {
        articles: state.articles.items,
    }
}

export var HomeView = connect(mapStateToProps)((props: Props) => {
    let articles: IArticle[] = [];
    for (let articleKey in props.articles) {
        articles.push(props.articles[articleKey]);
    }
    articles = articles.reverse();
    return <Home articles={articles}/>;
});