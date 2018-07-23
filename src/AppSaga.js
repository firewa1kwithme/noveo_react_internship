import authActionTypes from './ducks/auth/action-types';
import articleActionTypes from './ducks/article/action-types';
import {call, all, takeLatest, put} from 'redux-saga/effects';
import {loginSaga, registerSaga} from './ducks/auth/sagas';
import {allArticlesSaga, newArticleSaga} from './ducks/article/sagas';
import {push} from 'connected-react-router';
import Routes from './constants';

function* loginUserSaga(action) {
    yield call(loginSaga, {
        username: action.username,
        password: action.password
    });
}
function* registerUserSaga(action) {
    yield call(registerSaga, {
        username: action.username,
        password: action.password
    });
}

function* showAllArticlesSaga(action) {
    yield call(allArticlesSaga, {
        articles: action.articles
    });
}

function* changeRouteSaga(location) {
    yield put(push(location));
}

function* createArticleSaga(action) {
    yield call(newArticleSaga, {
        title: action.title,
        content: action.content,
        imageUrl: action.imageUrl
    });

    yield call(changeRouteSaga, Routes.FEED);
}

export default function* () {
    yield all([
        takeLatest(authActionTypes.login, loginUserSaga),
        takeLatest(authActionTypes.register, registerUserSaga),
        takeLatest(articleActionTypes.fetchAllArticles, showAllArticlesSaga),
        takeLatest(articleActionTypes.newArticle, createArticleSaga)
    ]);
}
