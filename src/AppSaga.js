import services from './services';
import actions from './ducks/auth/actions';
import actionTypes from './ducks/auth/action-types';
import {call, all, takeLatest} from 'redux-saga/effects';
import {loginSaga, registerSaga} from './ducks/auth/sagas';

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
export default function* () {
    yield all([
        takeLatest(actionTypes.login, loginUserSaga),
        takeLatest(actionTypes.register, registerUserSaga)
    ]);
}
