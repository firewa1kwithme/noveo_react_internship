import services from '../article/services';
import actions from './actions';
import {call, put} from 'redux-saga/effects';

export function* newArticleSaga(article) {
    try {
        yield put(actions.newArticleRequest(article));
        const response = yield call(services.createArticle, article);
        yield put(actions.newArticleSuccess(response));
    } catch (e) {
        yield put(actions.newArticleError(e));
        return e.statusMessage;
    }
}

export function* allArticlesSaga(articles) {
    try {
        yield put(actions.allArticlesRequest(articles));
        const response = yield call(services.fetchArticles, 10, 0);
        yield put(actions.allArticlesSuccess(response.articles));
    } catch (e) {
        yield put(actions.allArticlesError(e));
        return e.statusMessage;
    }
}

export function* singleArticleSaga(article) {
    try {
        yield put(actions.singleArticleRequest(article));
        const {article} = yield call(services.fetchSingleArticle, article);
        yield put(actions.singleArticleSuccess(article));
    } catch (e) {
        yield put(actions.singleArticleError(e));
        return e.statusMessage;
    }
}
