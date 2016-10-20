import * as React from "react";
import { IArticle } from "../models/IArticle";
import { ArticleSummary } from "../components/ArticleSummary";

import "./Home.scss";

let articles : IArticle[] = [
    {
        author: 'Vivek Maharajh',
        title : 'Culture studies & models',
        date: new Date(2016, 10, 8),
        link: '#1',
    },
    {
        author: 'Vivek Maharajh',
        title: 'Cultural Dimensions & Design',
        date: new Date(2016, 10, 16),
        link: '#2',
    }
];


export interface Props {
}

export var Home: React.StatelessComponent<Props> = (props: Props) => {

    return (
        <main>
            <h1>HCDE 512 Process Book</h1>
            <p>A weekly blog the HCDE 512 course at the University of Washington.<br/>Vivek Maharajh</p>
            <ol>{
                articles.map(article => 
                    <li key={article.link}>
                        <ArticleSummary {...article}/>
                    </li>
                )
            }</ol>
        </main>
    );
}