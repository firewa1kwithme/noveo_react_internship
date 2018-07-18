import services from './services';
import actions from './ducks/auth/actions';
import actionTypes from './ducks/auth/action-types';
import {call, all, takeLatest} from 'redux-saga/effects';
import {loginSaga} from './ducks/auth/AuthSaga';

function* loginUserSaga(action) {
    console.log(action.username);
    console.log(action.password);
    yield call(loginSaga, {
        username: action.username,
        password: action.password
    });
}

export default function* () {
    yield all([
        takeLatest(actionTypes.login, loginUserSaga)
    ]);
}
