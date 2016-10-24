import { IArticle } from "../models/IArticle";

export class ArticleStore {

    private articles : IArticle[] = [
        {
            author: 'Vivek Maharajh',
            title : 'Culture studies & models',
            date: new Date(2016, 10, 8),
            id: 'culture-studies-models',
        },
        {
            author: 'Vivek Maharajh',
            title: 'Cultural Dimensions & Design',
            date: new Date(2016, 10, 16),
            id: 'cultural-dimensions-design',
        }
    ];

    getArticles() : IArticle[] {
        return this.articles;
    }

    getArticle(id: string) {
        return this.articles.filter(article => article.id == id)[0];
    }
}