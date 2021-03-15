import * as React from "react";

import "./ArticleCaption.scss";

export type Props = React.HTMLProps<HTMLDivElement>;

export default ({ children }: Props) => {
  return <section className="article-caption">{children}</section>;
};
