import {call, put} from 'redux-saga/effects';
import actions from './actions';
import services from './services';

export function* fetchArticlesSaga(limit, offset) {
    try {
        yield put(actions.fetchArticlesRequest());

        const {articles, pagination} = yield call(services.fethArticles, limit, offset);

        yield put(actions.fetchArticlesSuccess(articles, pagination));
        return {payload: {articles, pagination}};
    } catch (error) {
        yield put(actions.fetchArticlesError(error));
        return {error};
    }
}

export default {
    fetchArticlesSaga
};
