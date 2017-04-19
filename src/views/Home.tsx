import * as Helmet from "react-helmet";
import * as React from "react";
import { IArticle } from "../models/IArticle";
import { ArticleStore } from "../stores/ArticleStore";
import { Articles } from "../components/Articles";

import "./Home.scss";

export interface Props {
}

export class State {
    public Articles: IArticle[];
}

export class Home extends React.Component<Props, State> {
    constructor(props: Props) {        
        super(props);
        this.state = new State();
        this.state.Articles = [];
    }

    public componentDidMount() {
        let store = new ArticleStore();
        this.setState({Articles: store.getArticles()} as State);
    }    

    public render() {
        let bannerContent = <p className="no-margin-top">A place to store my notes.</p>;
        return (
            <Articles 
                articles={this.state.Articles} 
                bannerContent={bannerContent}
                bannerTitle="Notes by V"
            />
        );
    }
}