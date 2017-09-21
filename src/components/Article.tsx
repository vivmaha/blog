import * as Moment from "moment";

import * as React from "react";
import { Helmet } from "react-helmet";

import { ArticleFreeform } from "../components/ArticleFreeform";
import { ArticleSetSummary } from "../components/ArticleSetSummary";
import { Header } from "../components/Header";

import { IArticleContent } from "../models/IArticleContent";
import { IArticle } from "../models/IArticle";

import "./Article.scss";

export let Article = (article: IArticle) => {

    let friendlyDate = Moment(article.date).format("MMM Do, YYYY");

    let materializeSections = (sections: IArticleContent[][]): JSX.Element[] => {
        return sections.map(section => {
            return <section>{
                    section.map(sectionData => <ArticleFreeform data={sectionData}/>)
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
                        <ArticleFreeform data={article.introduction.extended}/>
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