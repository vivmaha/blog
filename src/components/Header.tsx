import * as React from "react";
import { Link } from 'react-router-dom';

import "./Header.scss";

export interface Props {
}

export var Header: React.StatelessComponent<Props> = (props: Props) => {
    return (
        <header className="header">
            <nav>
                <Link to="/">←</Link>
            </nav>
        </header>
    );
}