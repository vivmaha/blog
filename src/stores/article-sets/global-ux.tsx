import * as React from "react";

import { IArticleSet } from "../../models/IArticleSet";

class ArticleSet implements IArticleSet {
    id = "global-ux";
    title = "Global UX";
    backgroundImageUrl = "https://notesbyvmedia.blob.core.windows.net/images/car-on-map-web-optimized.jpg"
    introduction = (
        <p className="no-margin-top">
            <span>A series exploring the existing literature on Global UX.</span>
            <br/>
            <br/>
            <span>This is part of my <em>HCDE 512</em> coursework at the University of Washington as instructed by Manuela Noske.</span>
        </p>
    );
}

export default new ArticleSet();