import * as Helmet from "react-helmet";
import * as React from "react";
import { IArticle } from "../models/IArticle";
import { ArticleStore } from "../stores/ArticleStore";
import { Articles } from "../components/Articles";

interface Params {
    id: string;
}

export interface Props {
    params: Params;
}

export class State {
    public Articles: IArticle[];
    public Title: string;
}

export class ArticleSet extends React.Component<Props, State> {
    constructor(props: Props) {        
        super(props);
        this.state = new State();
        this.state.Articles = [];
    }

    public componentDidMount() {
        let store = new ArticleStore();        
        let articles = store.getArticlesOfArticleSet(this.props.params.id);
        let articleSet = store.getArticleSet(this.props.params.id);
        this.setState({
            Articles: articles,
            Title: articleSet.title,
        } as State);
    }    

    public render() {
        let bannerContent = <p className="no-margin-top">A place to store my notes.</p>;
        return (
            <Articles 
                articles={this.state.Articles} 
                bannerContent={bannerContent}
                bannerTitle={this.state.Title}
            />
        );
    }
}