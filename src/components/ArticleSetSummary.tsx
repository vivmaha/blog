import * as React from "react";

import { ArticleStore } from "../content/ArticleStore";
import { Link } from 'react-router-dom';
import { ArticleCaption }  from "./ArticleCaption";

export interface Props {
    articleSetId: string;
    currentArticleId: string;
    includeLinkToNextArticle? : boolean;
    includeLinkToPreviousArticle? : boolean;
}

export var ArticleSetSummary: React.StatelessComponent<Props> = (props: Props) => {
    if (!props.articleSetId) {
        return null;
    }
    let store = new ArticleStore();
    let articleSet = store.getArticleSet(props.articleSetId);
    let link = `/series/${props.articleSetId}`;

    let linkToNextArticleElement = null;
    if (props.includeLinkToNextArticle) {
        let currentArticle = store.getArticle(props.currentArticleId);        
        if (currentArticle.nextArticleId) {
            let nextArticle = store.getArticle(currentArticle.nextArticleId);
            let nextArticleUrl = `/article/${nextArticle.id}`;
            linkToNextArticleElement = (                
                <p>
                    Up next: <Link to={nextArticleUrl}>{nextArticle.title}</Link>
                </p>
            );
        }
    }
    return (
        <ArticleCaption>
            <p>This note is part of a series: <Link to={link}>{articleSet.title}</Link></p>
            { linkToNextArticleElement }
        </ArticleCaption>
    );
}