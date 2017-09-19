import { IArticle } from '../models/IArticle';
import { IArticleSet } from '../models/IArticleSet';

export interface ListState<T> {
    selectedId: string,    
    items: {
        [id: string]: T
    },    
}

export interface State {
    articles: ListState<IArticle>;
    articleSets: ListState<IArticleSet>;
}