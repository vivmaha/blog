import * as React from "react";
import * as ReactRouter from 'react-router';

interface Params {
    articleId: string;
}

export interface Props {
    params : Params;
}

export var Article: React.StatelessComponent<Props> = (props: Props) => {

    return (
        <div>
            <header>
                <nav>
                    <ReactRouter.Link to="/">Home</ReactRouter.Link>
                </nav>
            </header>
            <main>
                This is an article {props.params.articleId}
            </main>
        </div>
    );
}