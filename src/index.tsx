import * as React from "react";
import * as ReactDOM from "react-dom";

import * as Hello from "./components/Hello";

ReactDOM.render(
    <Hello.Component compiler="TypeScript" framework="React"/>,
    document.getElementById("content")
);