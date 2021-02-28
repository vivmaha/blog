import Series from "../../models/ISeries";

import { ArticleContentHtml } from "../../models/IArticleContent";

export default {
  id: "global-ux",
  title: "Global UX",
  backgroundImageUrl:
    "https://notesbyvmedia.blob.core.windows.net/images/car-on-map-web-optimized.jpg",
  introduction: {
    type: "html",
    content: `
        <p class="force-margin-top">
            <span>A literature review.</span>
            <br/>
            <br/>
            <span>This was part of my coursework at the University of Washington. Specifically, HCDE 512 with Manuela Noske.</span>
        </p>
        `,
  } as ArticleContentHtml,
} as Series;
