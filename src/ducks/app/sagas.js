import appActionTypes from './action-types';
import {call, all, takeLatest, put} from 'redux-saga/effects';
import {loginSaga, registerSaga, logoutSaga, fetchUserSaga} from '../auth/sagas';
import {allArticlesSaga, newArticleSaga} from '../article/sagas';
import services from '../auth/services';
import {push} from 'connected-react-router';
import Routes from '../../constants';
import actions from './actions';

function* loginUserSaga(action) { //
    yield call(loginSaga, {
        username: action.username,
        password: action.password
    });
}

function* registerUserSaga(action) { //
    yield call(registerSaga, {
        username: action.username,
        password: action.password
    });
}

function* showAllArticlesSaga(action) { //
    yield call(allArticlesSaga, {
        articles: action.articles
    });
}

function* changeRouteSaga(location) { //
    yield put(push(location));
}

function* createArticleSaga(action) { //
    yield call(newArticleSaga, {
        title: action.title,
        content: action.content,
        imageUrl: action.imageUrl
    });

    yield call(changeRouteSaga, Routes.FEED);
}

function* initAppSaga() {
    yield call(services.fetchUser);
    yield put(actions.initial());
}

function* logoutUserSaga() { //
    yield call(logoutSaga);
    // yield put(articleActions.flushState());
}


export default function* () {
    yield all([
        takeLatest(appActionTypes.LOGIN, loginUserSaga),//
        takeLatest(appActionTypes.REGISTER, registerUserSaga),//
        takeLatest(appActionTypes.FETCH_ALL_ARTICLES, showAllArticlesSaga),//
        takeLatest(appActionTypes.NEW_ARTICLE, createArticleSaga),//
        takeLatest(appActionTypes.LOGOUT, logoutSaga), //
        call(initAppSaga)//
    ]);
}
