import * as Helmet from "react-helmet";
import * as React from "react";
import { IArticle } from "../models/IArticle";
import { IArticleSet } from "../models/IArticleSet";
import { ArticleStore } from "../stores/ArticleStore";
import { Articles } from "../components/Articles";

interface Params {
    id: string;
}

export interface Props {
    params: Params;
}

export class State {
    articles: IArticle[];
    articleSet: IArticleSet
}

export class ArticleSet extends React.Component<Props, State> {
    constructor(props: Props) {        
        super(props);
        this.state = new State();
        this.state.articles = [];
        this.state.articleSet = {
            backgroundImageUrl: "",
            title: "",
            id: "",
        };
    }

    public componentDidMount() {
        let store = new ArticleStore();        
        let articles = store.getArticlesOfArticleSet(this.props.params.id);
        let articleSet = store.getArticleSet(this.props.params.id);
        this.setState({
            articles: articles,
            articleSet: articleSet,
        } as State);
    }    

    public render() {
        // TODO - Figure out how to store this content dynamically in the data layer for the specific article set.
        let bannerContent = <p className="no-margin-top">
            <span>A guide for Global UX</span>
            <br/>
            <br/>
            <span>This was part of my HCDE 512 coursework at the University of Washington, which was instructed by Manuela Noske.</span>
        </p>
        return (
            <Articles 
                articles={this.state.articles} 
                bannerContent={bannerContent}
                bannerTitle={this.state.articleSet.title}
                backgroundImageUrl={this.state.articleSet.backgroundImageUrl}
            />
        );
    }
}