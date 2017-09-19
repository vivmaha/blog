import { IArticle } from "../models/IArticle";
import { IArticleSet } from "../models/IArticleSet";

import articleCultureStudiesModels from './articles/culture-studies-models';
import articleCulturalDimensionsDesign from './articles/cultural-dimensions-design';
import articleInternationalUIDesign from './articles/international-ui-design';
import articleInternationalResearch from './articles/international-research';
import articleTranslationLocalization from './articles/translation-localization';
import articleDevelopingEmergingEconomies from './articles/developing-emerging-economies';
import articleCrossCulturalTeams  from './articles/cross-cultural-teams';

import articleSetGlobalUx from './article-sets/global-ux';

export class ArticleStore {   

    private articles : IArticle[];
    
    constructor() {

        this.articles = [
            articleCrossCulturalTeams,
            articleCulturalDimensionsDesign,
            articleDevelopingEmergingEconomies,
            articleTranslationLocalization,
            articleInternationalUIDesign,
            articleInternationalResearch,
            articleCultureStudiesModels,
        ];

        this.articleSets.forEach(articleSet => {
            let articles = this.getArticlesOfArticleSet(articleSet.id);
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