import * as Moment from "moment";
import * as React from "react";
import { Link } from 'react-router';
import { IArticle } from "../models/IArticle";

import "./ArticleSummary.scss";

export var ArticleSummary: React.StatelessComponent<IArticle> = (props: IArticle) => {
    
    let friendlyDate = Moment(props.date).format("MMM Do, YYYY");
    let link = `/article/${props.id}`;
    return (
        <section className="article-summary">
            <h1>
                <Link to={link}>{props.title}</Link>
            </h1>
            <span>{friendlyDate}</span>
            <p className="no-margin-top">{props.introductionPart1}</p>
        </section>
    );
}