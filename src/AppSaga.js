import authActionTypes from './ducks/auth/action-types';
import articleActionTypes from './ducks/article/action-types';
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

function* createArticleSaga(action) {
    yield call(newArticleSaga, {
        title: action.title,
        content: action.content,
        imageUrl: action.imageUrl
    });
}

/*function* createNewArticleSaga(action) {
    yield call(newArticleSaga, {
        article: action.article
    });
}
function* showSingleArticlesSaga(action) {
    yield call(singleArticleSaga, {
        article: action.article
    });
}*/
export default function* () {
    yield all([
        takeLatest(authActionTypes.login, loginUserSaga),
        takeLatest(authActionTypes.register, registerUserSaga),
        takeLatest(articleActionTypes.fetchAllArticles, showAllArticlesSaga),
        takeLatest(articleActionTypes.newArticle, createArticleSaga)
/*        takeLatest(authActionTypes.register, showAllArticlesSaga),
        takeLatest(authActionTypes.register, showSingleArticlesSaga)*/
    ]);
}
