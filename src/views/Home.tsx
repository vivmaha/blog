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
        <main>
            <h1>HCDE 512 Process Book</h1>
            <p>A weekly blog the HCDE 512 course at the University of Washington.<br/>Vivek Maharajh</p>
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