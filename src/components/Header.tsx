import * as React from "react";
import * as ReactRouter from 'react-router';

import "./Header.scss";

export interface Props {
}

export var Header: React.StatelessComponent<Props> = (props: Props) => {
    return (
        <header>
            <nav>
                <ReactRouter.Link to="/">←</ReactRouter.Link>
            </nav>
        </header>
    );
}