import * as React from "react";

import { ArticleStore } from "../stores/ArticleStore";
import { Link } from 'react-router';

import "./ArticleSetSummary.scss";

export interface Props {
    id: string;
}

export var ArticleSetSummary: React.StatelessComponent<Props> = (props: Props) => {
    if (!props.id) {
        return null;
    }
    let store = new ArticleStore();
    let articleSet = store.getArticleSet(props.id);
    return (
        <p className="article-set-summary">This note is part of a series: <Link to={'foo'}>{articleSet.title}</Link></p>
    );
}