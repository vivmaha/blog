import { IArticle } from "../models/IArticle";
import articleCultureStudiesModels from './articles/culture-studies-models/culture-studies-models';

export class ArticleStore {    

    private articles : IArticle[] = [        
        articleCultureStudiesModels,
        {
            author: 'Vivek Maharajh',
            title: 'Cultural Dimensions & Design',
            date: new Date(2016, 10, 16),
            id: 'cultural-dimensions-design',
            sections : []
        }
    ];

    getArticles() : IArticle[] {
        return this.articles;
    }

    getArticle(id: string) {
        return this.articles.filter(article => article.id == id)[0];
    }
}