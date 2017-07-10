import { IArticle } from "../models/IArticle";
import { IArticleSet } from "../models/IArticleSet";

import articleCultureStudiesModels from './articles/culture-studies-models/culture-studies-models';
import articleCulturalDimensionsDesign from './articles/cultural-dimensions-design/cultural-dimensions-design';
import articleInternationalUIDesign from './articles/international-ui-design/international-ui-design';
import articleInternationalResearch from './articles/international-research/international-research';
import articleTranslationLocalization from './articles/translation-localization/translation-localization';
import articleDevelopingEmergingEconomies from './articles/developing-emerging-economies/developing-emerging-economies';
import articleCrossCulturalTeams  from './articles/cross-cultural-teams/cross-cultural-teams';

import articleSetGlobalUx from './article-sets/global-ux';

export class ArticleStore {   

    private articles : IArticle[] = [
        articleCrossCulturalTeams,
        articleDevelopingEmergingEconomies,
        articleTranslationLocalization,
        articleInternationalUIDesign,
        articleInternationalResearch,        
        articleCulturalDimensionsDesign,
        articleCultureStudiesModels,
    ];

    
    ArticleStore() {
        this.articleSets.forEach(articleSet => {
            let articles = this.getArticlesOfArticleSet(articleSet.id);            
        });
    }

    private articleSets: IArticleSet[] = [
        articleSetGlobalUx,
    ];

    getArticles() : IArticle[] {
        let articles = this.articles;
        articles = this.sortArticlesByDate(articles).reverse();
        return articles;
    }

    getArticle(id: string) {
        return this.articles.filter(article => article.id == id)[0];
    }

    getArticleSet(id: string) {
        return this.articleSets.filter(articleSet => articleSet.id == id)[0];
    }

    getArticlesOfArticleSet(id: string) {
        let articles = this.articles.filter(article => article.articleSetId == id);
        articles = this.sortArticlesByDate(articles);
        return articles;
    }

    private sortArticlesByDate(articles: IArticle[]) {
        return articles.sort((a: IArticle, b: IArticle) => a.date.getTime() - b.date.getTime());
    }
}