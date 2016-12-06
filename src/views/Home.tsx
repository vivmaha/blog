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
            <h1>Lorem Ipsum</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu massa sodales, dapibus neque sagittis, posuere leo. </p>
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