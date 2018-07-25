import services from '../article/services';
import actions from './actions';
import {call, put} from 'redux-saga/effects';

export function* newArticleSaga(article) {
    try {
        yield put(actions.newArticleRequest(article));
        const response = yield call(services.createArticle, article);
        yield put(actions.newArticleSuccess(response));
        return response.article;
    } catch (e) {
        yield put(actions.newArticleError(e.errorCode));
    }
}

export function* allArticlesSaga() {
    try {
        yield put(actions.allArticlesRequest());
        const response = yield call(services.fetchArticles, 20, 0);
        yield put(actions.allArticlesSuccess(response.articles));
    } catch (e) {
        yield put(actions.allArticlesError(e.errorCode));
    }
}

export function* singleArticleSaga(id) {
    try {
        yield put(actions.singleArticleRequest(id));
        const response = yield call(services.fetchSingleArticle, id);
        yield put(actions.singleArticleSuccess(response.article));
    } catch (e) {
        yield put(actions.singleArticleError(e.errorCode));
    }
}
