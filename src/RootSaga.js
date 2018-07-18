import {call, all} from 'redux-saga/effects';
import appSaga from './AppSaga';

export default function* () {
    yield all([
        call(appSaga)
    ]);
}
