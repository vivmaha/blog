import articleCultureStudiesModels from './culture-studies-models';
import articleCulturalDimensionsDesign from './cultural-dimensions-design';
import articleInternationalUIDesign from './international-ui-design';
import articleInternationalResearch from './international-research';
import articleTranslationLocalization from './translation-localization';
import articleDevelopingEmergingEconomies from './developing-emerging-economies';
import articleCrossCulturalTeams  from './cross-cultural-teams';
import articleSearchEngineOptimization101  from './search-engine-optimization-101';
import articleInformationArchitecture101  from './information-architecture-101';

import { IArticle } from "../../models/IArticle";

let articles = [
    articleCrossCulturalTeams,
    articleCulturalDimensionsDesign,
    articleDevelopingEmergingEconomies,
    articleTranslationLocalization,
    articleInternationalUIDesign,
    articleInternationalResearch,
    articleCultureStudiesModels,
    articleSearchEngineOptimization101,
    articleInformationArchitecture101
];

articles = articles.sort((a: IArticle, b: IArticle) => a.date.getTime() - b.date.getTime());

for (let i = 0; i < articles.length; i++) {        
    let getArticleId = (index: number) => {
        if (index < 0 || index >= articles.length) {
            return undefined;
        }
        return articles[index].id;
    };

    articles[i].previousArticleId = getArticleId(i - 1);
    articles[i].nextArticleId = getArticleId(i + 1);
}

export { articles };