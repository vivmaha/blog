import * as Helmet from "react-helmet";
import * as Moment from "moment";
import * as React from "react";
import { ArticleStore } from "../stores/ArticleStore";
import { Header } from "../components/Header";
import { ArticleSetSummary } from "../components/ArticleSetSummary";

import "./Article.scss";

interface Params {
    id: string;
}

export interface Props {
    params : Params;
}

export var Article: React.StatelessComponent<Props> = (props: Props) => {
    let store = new ArticleStore();
    let article = store.getArticle(props.params.id);
    let friendlyDate = Moment(article.date).format("MMM Do, YYYY");
    return (
        <div className="body-container">
            <Helmet title={article.title}/>
            <Header></Header>
            <main>
                <article>
                    <header>
                        <h1>{article.title}</h1>
                        <p>by V Maharajh on {friendlyDate}</p>
                        <p>{article.introductionPart1}</p>
                        {article.introductionPart2}                        
                        <ArticleSetSummary id={article.articleSetId} />
                    </header>
                    { article.sections }
                    <footer>
                        <ArticleSetSummary id={article.articleSetId} />
                    </footer>
                </article>
            </main>
        </div>
    );
}