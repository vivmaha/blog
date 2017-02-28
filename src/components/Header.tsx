import * as React from "react";
import { Link } from 'react-router';

import "./Header.scss";

export interface Props {
}

export var Header: React.StatelessComponent<Props> = (props: Props) => {
    return (
        <header>
            <nav>
                <Link to="/">←</Link>
            </nav>
        </header>
    );
}