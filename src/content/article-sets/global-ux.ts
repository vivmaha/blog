import * as React from "react";

import { IArticleSet } from "../../models/IArticleSet";

import { IArticleContentHtml } from "../../models/IArticleContent";

export default <IArticleSet>{
    id: "global-ux",
    title: "Global UX",
    backgroundImageUrl: "https://notesbyvmedia.blob.core.windows.net/images/car-on-map-web-optimized.jpg",
    introduction: <IArticleContentHtml>{ 
        type: "html",
        content: `
        <p class="force-margin-top">
            <span>A literature review.</span>
            <br/>
            <br/>
            <span>This was part of my coursework at the University of Washington. Specifically, HCDE 512 with Manuela Noske.</span>
        </p>
        `
    }
}