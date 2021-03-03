import * as React from "react";
import { Link } from "react-router-dom";

import "./SeriesBanner.scss";

export interface SeriesBannerLink {
  url: string;
  text: string;
}

export interface Props {
  heroUrl: string;
  title: string;
  content: JSX.Element;
  link: SeriesBannerLink;
}

export const SeriesBanner: React.FC<Props> = ({
  heroUrl,
  title,
  content,
  link,
}) => {
  const bannerStyle = {
    backgroundImage: `url('${heroUrl}')`,
  };

  return (
    <header className="series-banner" style={bannerStyle}>
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
