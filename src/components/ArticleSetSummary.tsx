import * as React from "react";
import { Link } from 'react-router-dom';
import { ArticleCaption }  from "./ArticleCaption";
import { IArticle } from "../models/IArticle";
import { IArticleSet } from "../models/IArticleSet";


export interface Props {
    articleSet: IArticleSet;
    nextArticle: IArticle;
    includeLinkToNextArticle? : boolean;
    includeLinkToPreviousArticle? : boolean;
}

export var ArticleSetSummary: React.StatelessComponent<Props> = (props: Props) => {

    let link = `/series/${props.articleSet.id}`;

    let linkToNextArticleElement = null;
    if (props.includeLinkToNextArticle && props.nextArticle) {
        let nextArticleUrl = `/article/${props.nextArticle.id}`;
        linkToNextArticleElement = (                
            <p>
                Up next: <Link to={nextArticleUrl}>{props.nextArticle.title}</Link>
            </p>
        );
    }

    return (
        <ArticleCaption>
            <p>This note is part of a series: <Link to={link}>{props.articleSet.title}</Link></p>
            { linkToNextArticleElement }
        </ArticleCaption>
    );
}