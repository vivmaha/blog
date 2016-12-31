import * as Moment from "moment";
import * as React from "react";
import * as ReactRouter from 'react-router';
import { ArticleStore } from "../stores/ArticleStore";
import { Header } from "../components/Header";

import "./Article.scss";

interface Params {
    articleId: string;
}

export interface Props {
    params : Params;
}

export var Article: React.StatelessComponent<Props> = (props: Props) => {
    let store = new ArticleStore();
    let article = store.getArticle(props.params.articleId);    
    let friendlyDate = Moment(article.date).format("MMM Do, YYYY");
    return (
        <div>        
            <Header></Header>
            <main>
                <article>
                    <header>
                        <h1>{article.title}</h1>
                        <p>by V Maharajh on {friendlyDate}</p>
                        {article.introductionPart1}
                        {article.introductionPart2}
                    </header>
                    { article.sections }
                </article>
            </main>
        </div>
    );
}