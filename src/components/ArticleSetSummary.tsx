import * as React from "react";

import { ArticleStore } from "../stores/ArticleStore";
import { Link } from 'react-router-dom';
import { ArticleCaption }  from "./ArticleCaption";

export interface Props {
    id: string;
}

export var ArticleSetSummary: React.StatelessComponent<Props> = (props: Props) => {
    if (!props.id) {
        return null;
    }
    let store = new ArticleStore();
    let articleSet = store.getArticleSet(props.id);
    let link = `/series/${props.id}`;
    return (
        <ArticleCaption>
            This note is part of a series: <Link to={link}>{articleSet.title}</Link>
        </ArticleCaption>
    );
}