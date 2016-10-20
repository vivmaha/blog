import * as React from "react";
import { IArticle } from "../models/IArticle";

export var ArticleSummary: React.StatelessComponent<IArticle> = (props: IArticle) => {
    return (
        <section>
            <h1>
                <a href={props.link}>{props.title}</a>
            </h1>
            { /* TODO: Use Moment.JS to format this date */ }            
            <span>{props.date.toString()} —{props.author}</span>
        </section>
    );
}