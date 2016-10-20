import * as Moment from "moment";
import * as React from "react";
import { IArticle } from "../models/IArticle";

export var ArticleSummary: React.StatelessComponent<IArticle> = (props: IArticle) => {
    
    let friendlyDate = Moment(props.date).format("MMM Do YY");

    return (
        <section>
            <h1>
                <a href={props.link}>{props.title}</a>
            </h1>
            <span>{friendlyDate} —{props.author}</span>
        </section>
    );
}