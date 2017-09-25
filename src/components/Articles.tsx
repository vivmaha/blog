import { Helmet } from "react-helmet";
import * as React from "react";
import { Link } from 'react-router-dom';

import { IArticle } from "../models/IArticle";
import { ArticleSummary } from "./ArticleSummary";
import { ArticleCaption } from "./ArticleCaption";
import { ArticlesBanner } from "./ArticlesBanner";

import "./Articles.scss";

export interface Props extends React.HTMLProps<HTMLDivElement> {
    articles: IArticle[];
    bannerTitle: string;
    bannerContent: JSX.Element;
    backgroundImageUrl: string;
}

export class State {
}

export class Articles extends React.Component<Props, State> {

    constructor(props: Props) {        
        super(props);
        this.state = new State();
    }

    public render() {
        let bannerStyle = {
            backgroundImage: `url('${this.props.backgroundImageUrl}')`,
        }
        let isHome = window.location.pathname == '/';
        let homeRecirculation: JSX.Element = null;
        if (!isHome) {
            homeRecirculation = (
                <nav>
                    <ArticleCaption>
                        <p>This series is part of <Link to="/">Notes by V</Link></p>
                    </ArticleCaption>
                </nav>
            );
        }

        return (
                <main className="articles">
                    <Helmet title={this.props.bannerTitle}/>
                    <ArticlesBanner
                        backgroundImageUrl={this.props.backgroundImageUrl}
                        content={this.props.bannerContent}
                        title={this.props.bannerTitle}
                    />
                    <article className="body-container no-margin-top">
                        { homeRecirculation }
                        <ol>
                        {                        
                            this.props.articles.map(article => 
                                <li key={article.id}>
                                    <ArticleSummary {...article}/>
                                </li>
                            )
                        }
                        </ol>
                        { homeRecirculation }
                    </article>
                </main>
        );
    }
}