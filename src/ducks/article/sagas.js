import {call, put, select} from 'redux-saga/effects';
import actions from './actions';
import services from './services';
import selectors from './selectors';

/**
 * @param {number} limit
 * @param {number} offset
 * @return {IterableIterator<*>}
 */
export function* fetchArticlesSaga(limit, offset) {
    try {
        yield put(actions.fetchArticlesRequest());

        const {articles, pagination} = yield call(services.fetchArticles, limit, offset);

        yield put(actions.fetchArticlesSuccess(articles, pagination));
        return {payload: {articles, pagination}};
    } catch (error) {
        yield put(actions.fetchArticlesError(error));
        return {error};
    }
}

/**
 * @param {string} id
 * @return {IterableIterator<*>}
 */
export function* fetchSingleArticleSaga(id) {
    try {
        let article = yield select(selectors.selectArticle, id);

        if (!article) {
            yield put(actions.fetchSingleArticleRequest());

            ({article} = yield call(services.fetchSingleArticle, id));
            yield put(actions.fetchSingleArticleSuccess(article));
        }

        return {payload: article};
    } catch (error) {
        yield put(actions.fetchSingleArticleError(error));
        return {error};
    }
}

/**
 * @param {Object} payload
 * @return {IterableIterator<*>}
 */
export function* createArticleSaga(payload) {
    try {
        yield put(actions.createArticleRequest());

        const {article} = yield call(services.createArticle, payload);

        yield put(actions.createArticleSuccess(article));
        return {payload: article};
    } catch (error) {
        yield put(actions.createArticleError(error));
        return {error};
    }
}

export default {
    fetchArticlesSaga,
    fetchSingleArticleSaga,
    createArticleSaga
};
