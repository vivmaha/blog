import * as React from "react";
import { Link } from "react-router-dom";

import "./ArticlesBanner.scss";

export interface ArticlesBannerLink {
  url: string;
  text: string;
}

export interface Props {
  backgroundImageUrl: string;
  title: string;
  content: JSX.Element;
  link: ArticlesBannerLink;
}

export default ({ backgroundImageUrl, title, content, link }: Props) => {
  const bannerStyle = {
    backgroundImage: `url('${backgroundImageUrl}')`,
  };

  return (
    <header className="articles-banner" style={bannerStyle}>
      <div className="content body-width">
        <div className="title">
          <h1>{title}</h1>
          {content}
        </div>
        <Link className="link" to={link.url}>
          {link.text}
        </Link>
      </div>
    </header>
  );
};
