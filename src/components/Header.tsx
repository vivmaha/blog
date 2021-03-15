import * as React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/">←</Link>
      </nav>
    </header>
  );
};
