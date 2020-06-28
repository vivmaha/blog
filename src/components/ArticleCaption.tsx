import * as React from "react";

import "./ArticleCaption.scss";

export type Props = React.HTMLProps<HTMLDivElement>;

export const ArticleCaption: React.FC<Props> = ({ children }) => {
  return <section className="article-caption">{children}</section>;
};
