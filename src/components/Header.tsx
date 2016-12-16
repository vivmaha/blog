import * as React from "react";
import * as ReactRouter from 'react-router';

import "./Header.scss";

export interface Props {
    pageTitle : string;
}

export var Header: React.StatelessComponent<Props> = (props: Props) => {
    return (
        <header>
            <nav>
                <ReactRouter.Link to="/">←</ReactRouter.Link>
            </nav>
            <h1>{ props.pageTitle }</h1>
        </header>
    );
}