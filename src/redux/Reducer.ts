import { combineReducers, Reducer, AnyAction } from 'redux';
import { State, ListState } from "./State";

import { IArticle } from "../models/IArticle";
import { IArticleSet } from "../models/IArticleSet";

import { articles as content_articles } from "../content/articles/Articles";
import { articleSets as content_articleSets} from "../content/article-sets/ArticleSets";

function createConstReducer<T>(initialState: T): Reducer<T> {
    return (state = initialState, action) => {
        return state;
    }
}

function createListState<T>(items: T[], keySelector: (value: T) => string): ListState<T> {
    let listState: ListState<T> = {
        items: {},
        selectedId: null,
    };
    items.forEach(item => {
        listState.items[keySelector(item)] = item;
    })
    return listState;
}

const articles: Reducer<ListState<IArticle>> = createConstReducer(
    createListState<IArticle>(content_articles, article => article.id)
);

const articleSets: Reducer<ListState<IArticleSet>> = createConstReducer(
    createListState<IArticleSet>(content_articleSets, articleSet => articleSet.id)
);

export const reducer = combineReducers<State>({
    articles,
    articleSets,
});