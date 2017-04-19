import { IArticleSet } from "../../models/IArticleSet";

class ArticleSet implements IArticleSet {
    id = "global-ux";
    title = "Global UX";
    backgroundImageUrl = "https://notesbyvmedia.blob.core.windows.net/images/car-on-map-web-optimized.jpg"
}

export default new ArticleSet();