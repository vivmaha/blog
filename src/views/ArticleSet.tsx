import { Helmet } from "react-helmet";
import * as React from "react";
import { IArticle } from "../models/IArticle";
import { IArticleSet } from "../models/IArticleSet";
import { ArticleStore } from "../content/ArticleStore";
import { Articles } from "../components/Articles";
import { RouteComponentProps } from "react-router";
import { ArticleMaterializer } from "./ArticleMaterializer";

interface Params {
    id: string;
}

export interface State {
    articles: IArticle[];
    articleSet: IArticleSet
}

export class ArticleSet extends React.Component<RouteComponentProps<any>, State> {

    private articleMaterializer = new ArticleMaterializer();

    constructor(props: RouteComponentProps<any>) {        
        super(props);
        this.state = {
            articles: [],
            articleSet: {
                introduction: null,
                backgroundImageUrl: "",
                title: "",
                id: "",
            }
        };
    }

    public componentDidMount() {
        let store = new ArticleStore();        
        let articles = store.getArticlesOfArticleSet(this.props.match.params.id);
        let articleSet = store.getArticleSet(this.props.match.params.id);
        this.setState({
            articles: articles,
            articleSet: articleSet,
        } as State);
    }    

    public render() {
        return (
            <Articles 
                articles={this.state.articles} 
                bannerContent={this.articleMaterializer.materialize(this.state.articleSet.introduction)}
                bannerTitle={this.state.articleSet.title}
                backgroundImageUrl={this.state.articleSet.backgroundImageUrl}
            />
        );
    }
}