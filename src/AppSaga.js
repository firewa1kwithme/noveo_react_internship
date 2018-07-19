import services from './ducks/auth/services';
import actions from './ducks/auth/actions';
import actionTypes from './ducks/auth/action-types';
import {call, all, takeLatest} from 'redux-saga/effects';
import {loginSaga, registerSaga} from './ducks/auth/sagas';
import {allArticlesSaga, newArticleSaga, singleArticleSaga} from './ducks/article/sagas';

//TODO: заменить на credentials???
function* loginUserSaga(action) {
    yield call(loginSaga, {
        username: action.username,
        password: action.password
    });
}
function* registerUserSaga(action) {
    console.log('register', action.username, action.password)
    yield call(registerSaga, {
        username: action.username,
        password: action.password
    });
}
function* createNewArticleSaga(action) {
    yield call(newArticleSaga, {
        article: action.article
    });
}
function* showAllArticlesSaga(action) {
    yield call(allArticlesSaga, {
        articles: action.articles
    });
}
function* showSingleArticlesSaga(action) {
    yield call(singleArticleSaga, {
        article: action.article
    });
}
export default function* () {
    yield all([
        takeLatest(actionTypes.login, loginUserSaga),
        takeLatest(actionTypes.register, registerUserSaga),
/*        takeLatest(actionTypes.register, createNewArticleSaga),
        takeLatest(actionTypes.register, showAllArticlesSaga),
        takeLatest(actionTypes.register, showSingleArticlesSaga)*/
    ]);
}
