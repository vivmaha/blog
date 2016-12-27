import * as Moment from "moment";
import * as React from "react";
import * as ReactRouter from 'react-router';
import { IArticle } from "../models/IArticle";

import "./ArticleSummary.scss";

export var ArticleSummary: React.StatelessComponent<IArticle> = (props: IArticle) => {
    
    let friendlyDate = Moment(props.date).format("MMM Do, YYYY");
    let link = [
        'article',
        props.id
    ].join('/');

    return (
        <section className="article-summary">
            <h1>
                <ReactRouter.Link to={link}>{props.title}</ReactRouter.Link>
            </h1>
            <span>{friendlyDate}</span>
            {props.introduction}
        </section>
    );
}