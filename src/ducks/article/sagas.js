import services from '../article/services';
import actions from './actions';
import {call, put} from 'redux-saga/effects';
import {push} from 'react-router-redux';

export function* newArticleSaga(article) {
    try {
        yield put(actions.newArticleRequest(article));
        const response = yield call(services.createArticle, article);
        yield put(actions.newArticleSuccess(response));
        return response.article;
    } catch (e) {
        yield put(actions.newArticleError(e.errorCode));
        // return e.statusMessage;
    }
}

export function* allArticlesSaga(articles) {
    try {
        yield put(actions.allArticlesRequest(articles));
        const response = yield call(services.fetchArticles, 20, 0);
        yield put(actions.allArticlesSuccess(response.articles));
    } catch (e) {
        yield put(actions.allArticlesError(e.errorCode));
        // return e.statusMessage;
    }
}

