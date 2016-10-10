import * as React from "react";

export interface Props {
    compiler: string;
    framework: string;
}

export var Component: React.StatelessComponent<Props> = (props: Props) => {
    return <h1> Hello from {props.compiler} and {props.framework}!</h1>
}