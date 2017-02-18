import { IArticle } from "../models/IArticle";
import articleCultureStudiesModels from './articles/culture-studies-models/culture-studies-models';
import articleCulturalDimensionsDesign from './articles/cultural-dimensions-design/cultural-dimensions-design';
import articleInternationalUIDesign from './articles/international-ui-design/international-ui-design';
import articleInternationalResearch from './articles/international-research/international-research';
import articleTranslationLocalization from './articles/translation-localization/translation-localization';
export class ArticleStore {    

    private articles : IArticle[] = [
        articleTranslationLocalization,
        articleInternationalResearch,
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