import * as Moment from "moment";

import * as React from "react";
import { Helmet } from "react-helmet";

import { ArticleSetSummary } from "../components/ArticleSetSummary";
import { Header } from "../components/Header";

import { IArticleContent } from "../models/IArticleContent";
import { IArticle } from "../models/IArticle";

import { ArticleMaterializer } from "../views/ArticleMaterializer";

import "./Article.scss";

export let Article = (article: IArticle) => {

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
};