import {call, all} from 'redux-saga/effects';
import appSaga from './ducks/app/sagas';

export default function* () {
    yield all([
        call(appSaga)
    ]);
}
