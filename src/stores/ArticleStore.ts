import { IArticle } from "../models/IArticle";
import articleCultureStudiesModels from './articles/culture-studies-models/culture-studies-models';

// todo - move this out of here
var tempArticle: IArticle = {
    author: 'Vivek Maharajh',
    title: 'Cultural Dimensions & Design',
    date: new Date(2016, 10, 16),
    id: 'cultural-dimensions-design',
    sections: []
};

export class ArticleStore {    

    private articles : IArticle[] = [        
        articleCultureStudiesModels,
        tempArticle,
    ];

    getArticles() : IArticle[] {
        return this.articles;
    }

    getArticle(id: string) {
        return this.articles.filter(article => article.id == id)[0];
    }
}