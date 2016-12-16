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
            <Header pageTitle={article.title}></Header>
            <main>
                <p>{ article.author }</p>
                {article.sections}
            </main>            
        </div>
    );
}