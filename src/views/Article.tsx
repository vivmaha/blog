import * as React from "react";
import * as ReactRouter from 'react-router';
import { ArticleStore } from "../stores/ArticleStore";
import { Header } from "../components/Header";

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
            <Header></Header>
            <main>
                <article>
                    <header>
                        <h1>{article.title}</h1>
                        <p>{article.author}</p>
                        {article.introduction}
                    </header>
                    {article.sections}
                </article>
            </main>
        </div>
    );
}