import * as Helmet from "react-helmet";
import * as React from "react";
import { IArticle } from "../models/IArticle";
import { ArticleSummary } from "../components/ArticleSummary";
import { ArticleStore } from "../stores/ArticleStore";

import "./Home.scss";

export interface Props {
}

export class State {
    public Articles: IArticle[];
    public IsCollapsed: boolean;
}

export class Home extends React.Component<Props, State> {
    constructor(props: Props) {        
        super(props);
        this.state = new State();
        this.state.Articles = [];
        this.handleScroll = this.handleScroll.bind(this);
    }

    public componentDidMount() {
        let store = new ArticleStore();
        this.setState({Articles: store.getArticles()} as State);
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
        let className = `home ${this.state.IsCollapsed ? 'collapsed' : ''}`;
        return (
                <main className={className}>
                    <Helmet title="Notes by V"/>
                    <div className="banner">
                        <div className="banner-title body-container">
                            <h1 className="no-margin-top">Notes by V</h1>
                            <p className="no-margin-top">A place to store my notes.</p>
                        </div>
                    </div>                
                    <ol className='body-container no-margin-top'>{
                        this.state.Articles.map(article => 
                            <li key={article.id}>
                                <ArticleSummary {...article}/>
                            </li>
                        )
                    }</ol>
                </main>
        );
    }
}