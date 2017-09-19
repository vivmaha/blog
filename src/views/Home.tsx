import { Helmet } from "react-helmet";
import * as React from "react";
import { IArticle } from "../models/IArticle";
import { ArticleStore } from "../content/ArticleStore";
import { Articles } from "../components/Articles";
import { RouteComponentProps } from "react-router";

export interface Props extends RouteComponentProps<any> {
}

export interface State {
    Articles: IArticle[];
}

export class Home extends React.Component<Props, State> {
    constructor(props: Props) {        
        super(props);
        this.state = {
            Articles: []
        };
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
                backgroundImageUrl="https://notesbyvmedia.blob.core.windows.net/images/pen-idea-bulb-paper-web-optimized.jpg"

            />
        );
    }
}