import * as React from "react";
import * as ReactRouter from 'react-router';
import { ArticleStore } from "../stores/ArticleStore";

import "./Home.scss";

interface Params {
    articleId: string;
}

export interface Props {
    params : Params;
}

export var Article: React.StatelessComponent<Props> = (props: Props) => {
    let store = new ArticleStore();
    let article = store.getArticle(props.params.articleId);
    return (
        <div>
            <header>
                <nav>
                    <ReactRouter.Link to="/">Home</ReactRouter.Link>
                </nav>
            </header>
            <main>
                <h1>{ article.title }</h1>
                <p>{ article.author }</p>
            </main>
        </div>
    );
}