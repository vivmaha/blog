import { IArticle } from "../models/IArticle";
import articleCultureStudiesModels from './articles/culture-studies-models/culture-studies-models';
import articleCulturalDimensionsDesign from './articles/cultural-dimensions-design/cultural-dimensions-design';
import articleInternationalUIDesign from './articles/international-ui-design/international-ui-design';
import articleInternationalResearch from './articles/international-research/international-research';
import articleTranslationLocalization from './articles/translation-localization/translation-localization';
import articleDevelopingEmergingEconomies from './articles/developing-emerging-economies/developing-emerging-economies';
import articleCrossCulturalTeams  from './articles/cross-cultural-teams/cross-cultural-teams';
export class ArticleStore {    

    private articles : IArticle[] = [
        articleCrossCulturalTeams,
        articleDevelopingEmergingEconomies,
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