import * as Helmet from "react-helmet";
import * as React from "react";
import { IArticle } from "../models/IArticle";
import { ArticleSummary } from "../components/ArticleSummary";

import "./Articles.scss";

export interface Props {
    articles: IArticle[];
    bannerTitle: string;
    bannerContent: JSX.Element;
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
        return (
                <main className={className}>
                    <Helmet title={this.props.bannerTitle}/>
                    <div className="banner">
                        <div className="banner-title body-container">
                            <h1 className="no-margin-top">{this.props.bannerTitle}</h1>
                            {this.props.bannerContent}
                        </div>
                    </div>                
                    <ol className='body-container no-margin-top'>{
                        this.props.articles.map(article => 
                            <li key={article.id}>
                                <ArticleSummary {...article}/>
                            </li>
                        )
                    }</ol>
                </main>
        );
    }
}