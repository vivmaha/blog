import { IArticle } from "../models/IArticle";
import articleCultureStudiesModels from './articles/culture-studies-models/culture-studies-models';
import articleCulturalDimensionsDesign from './articles/cultural-dimensions-design/cultural-dimensions-design';
import articleInternationalUIDesign from './articles/international-ui-design/international-ui-design';

export class ArticleStore {    

    private articles : IArticle[] = [
        articleInternationalUIDesign,
        articleCulturalDimensionsDesign,
        articleCultureStudiesModels,
    ];

    getArticles() : IArticle[] {
        return this.articles;
    }

    getArticle(id: string) {
        return this.articles.filter(article => article.id == id)[0];
    }
}