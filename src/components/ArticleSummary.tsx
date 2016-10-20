import * as Moment from "moment";
import * as React from "react";
import { IArticle } from "../models/IArticle";

import "./ArticleSummary.scss";

export var ArticleSummary: React.StatelessComponent<IArticle> = (props: IArticle) => {
    
    let friendlyDate = Moment(props.date).format("MMM Do, YYYY");

    return (
        <section className="article-summary">
            <h1>
                <a href={props.link}>{props.title}</a>
            </h1>
            <span>{friendlyDate}</span>
        </section>
    );
}