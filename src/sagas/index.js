import { fork } from 'redux-saga/effects';

import watchInitialization from './initializationState';
import watchUpdateState from './updateState';

function* rootSaga() {
    yield fork(watchInitialization);
    yield fork(watchUpdateState);
}

export default rootSaga;