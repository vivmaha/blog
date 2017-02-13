import * as React from "react";
import { IArticle } from "../models/IArticle";
import { ArticleSummary } from "../components/ArticleSummary";
import { ArticleStore } from "../stores/ArticleStore";

import "./Home.scss";

export interface Props {
}

export var Home: React.StatelessComponent<Props> = (props: Props) => {
    let store = new ArticleStore();
    let articles = store.getArticles();
    return (
        <main className="home">
            <h1>Notes by V</h1>
            <p className="no-margin-top">A place to store my notes.</p>
            <ol>{
                articles.map(article => 
                    <li key={article.id}>
                        <ArticleSummary {...article}/>
                    </li>
                )
            }</ol>
        </main>
    );
}