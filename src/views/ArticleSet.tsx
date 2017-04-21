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
            introduction: null,
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
        return (
            <Articles 
                articles={this.state.articles} 
                bannerContent={this.state.articleSet.introduction}
                bannerTitle={this.state.articleSet.title}
                backgroundImageUrl={this.state.articleSet.backgroundImageUrl}
            />
        );
    }
}