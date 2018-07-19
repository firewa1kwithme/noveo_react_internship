import services from '../auth/services';
import actions from './actions';
import {call, put} from 'redux-saga/effects';

export function* newArticleSaga(article) {
    try {
        yield put(actions.newArticleRequest(article));
        const {article} = yield call(services.createArticle, article);
        yield put(actions.newArticleSuccess(article));
    } catch (e) {
        yield put(actions.newArticleError(e));
        console.log(e.statusMessage);
        return e.statusMessage;
    }
}

export function* allArticlesSaga(articles) {
    try {
        yield put(actions.allArticlesRequest(articles));
        const {articles} = yield call(services.fetchArticles, articles);
        yield put(actions.allArticlesSuccess(articles));
    } catch (e) {
        yield put(actions.allArticlesError(e));
        console.log(e.statusMessage);
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
        console.log(e.statusMessage);
        return e.statusMessage;
    }
}
