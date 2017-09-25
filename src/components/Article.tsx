import * as Moment from "moment";

import * as React from "react";
import { Helmet } from "react-helmet";

import { ArticleFreeform } from "../components/ArticleFreeform";
import { ArticleSetSummary } from "../components/ArticleSetSummary";
import { Header } from "../components/Header";

import { IArticleContent } from "../models/IArticleContent";
import { IArticle } from "../models/IArticle";
import { IArticleSet } from "../models/IArticleSet";

import "./Article.scss";

interface Props {
    article: IArticle,
    nextArticle?: IArticle,
    articleSet?: IArticleSet
}

export let Article = (props: Props) => {

    let friendlyDate = Moment(props.article.date).format("MMM Do, YYYY");

    let materializeSections = (sections: IArticleContent[][]): JSX.Element[] => {
        return sections.map(section => {
            return <section>{
                    section.map(sectionData => <ArticleFreeform data={sectionData}/>)
                }</section>
        });
    }

    return (
        <div className="body-container">
            <Helmet title={props.article.title}/>
            <Header></Header>
            <main>
                <article>
                    <header>
                        <h1>{props.article.title}</h1>
                        <p>by V Maharajh on {friendlyDate}</p>
                        <p>{props.article.introduction.preview}</p>
                        <ArticleFreeform data={props.article.introduction.extended}/>
                        {
                            props.articleSet ? 
                                <ArticleSetSummary 
                                    articleSet={props.articleSet}
                                    nextArticle={props.nextArticle}
                                />
                            : null
                        }                        
                    </header>
                    { materializeSections(props.article.sections) }
                    <footer>
                        {
                            props.articleSet ? 
                                <ArticleSetSummary
                                    articleSet={props.articleSet}
                                    nextArticle={props.nextArticle}
                                    includeLinkToNextArticle
                                />
                            : null
                        }
                    </footer>
                </article>
            </main>
        </div>
    );
};