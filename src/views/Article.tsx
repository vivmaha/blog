import { Helmet } from "react-helmet";
import * as Moment from "moment";
import * as React from "react";
import { ArticleStore } from "../stores/ArticleStore";
import { Header } from "../components/Header";
import { ArticleSetSummary } from "../components/ArticleSetSummary";
import { RouteComponentProps } from "react-router";
import { ArticleMaterializer } from "./ArticleMaterializer";
import { IArticleContent } from "../models/IArticleContent";

import "./Article.scss";

export var Article = (props: RouteComponentProps<any>) => {
    let store = new ArticleStore();
    let article = store.getArticle(props.match.params.id);
    let friendlyDate = Moment(article.date).format("MMM Do, YYYY");
    let articleMaterializer = new ArticleMaterializer();

    let materializeSections = (sections: IArticleContent[][]): JSX.Element[] => {
        return sections.map(section => {
            return <section key={articleMaterializer.getKey()}>{
                    section.map(sectionData => articleMaterializer.materialize(sectionData))
                }</section>
        });
    }

    return (
        <div className="body-container">
            <Helmet title={article.title}/>
            <Header></Header>
            <main>
                <article>
                    <header>
                        <h1>{article.title}</h1>
                        <p>by V Maharajh on {friendlyDate}</p>
                        <p>{article.introduction.preview}</p>
                        {articleMaterializer.materialize(article.introduction.extended)}
                        <ArticleSetSummary 
                            articleSetId={article.articleSetId} 
                            currentArticleId={article.id}
                        />
                    </header>
                    { materializeSections(article.sections) }
                    <footer>
                        <ArticleSetSummary
                            articleSetId={article.articleSetId} 
                            currentArticleId={article.id}
                            includeLinkToNextArticle
                        />
                    </footer>
                </article>
            </main>
        </div>
    );
}