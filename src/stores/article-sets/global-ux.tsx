import * as React from "react";

import { IArticleSet } from "../../models/IArticleSet";

class ArticleSet implements IArticleSet {
    id = "global-ux";
    title = "Global UX";
    backgroundImageUrl = "https://notesbyvmedia.blob.core.windows.net/images/car-on-map-web-optimized.jpg"
    introduction = (
        <p className="no-margin-top">
            <span>A guide for Global UX</span>
            <br/>
            <br/>
            <span>This was part of my HCDE 512 coursework at the University of Washington, which was instructed by Manuela Noske.</span>
        </p>
    );
}

export default new ArticleSet();