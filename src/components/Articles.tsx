import * as Helmet from "react-helmet";
import * as React from "react";
import { Link } from 'react-router';

import { IArticle } from "../models/IArticle";
import { ArticleSummary } from "./ArticleSummary";
import { ArticleCaption } from "./ArticleCaption";

import "./Articles.scss";


export interface Props extends React.HTMLProps<HTMLDivElement> {
    articles: IArticle[];
    bannerTitle: string;
    bannerContent: JSX.Element;
    backgroundImageUrl: string;
}

export class State {
    public IsCollapsed: boolean;
}

export class Articles extends React.Component<Props, State> {

    constructor(props: Props) {        
        super(props);
        this.state = new State();
        this.handleScroll = this.handleScroll.bind(this);
    }

    public componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    public componentWillUnmount() {        
         window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event: UIEvent) {        
        let scrollTop = (event.target as any).body.scrollTop;
        this.setState({IsCollapsed: scrollTop != 0} as State);
    }

    public render() {
        let className = `articles ${this.state.IsCollapsed ? 'collapsed' : ''}`;
        let bannerStyle = {
            backgroundImage: `url('${this.props.backgroundImageUrl}')`,
        }
        let isHome = window.location.pathname == '/';
        let homeRecirculation: JSX.Element = null;
        if (!isHome) {
            homeRecirculation = (
                <nav>
                    <ArticleCaption>
                        This series is part of <Link to="/">Notes by V</Link>
                    </ArticleCaption>
                </nav>
            );
        }

        return (
                <main className={className}>
                    <Helmet title={this.props.bannerTitle}/>
                    <header style={bannerStyle}>
                        <div className="banner-title body-container">
                            <h1 className="no-margin-top">{this.props.bannerTitle}</h1>
                            {this.props.bannerContent}
                        </div>
                    </header>
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