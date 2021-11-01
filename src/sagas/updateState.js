import { takeEvery, select } from 'redux-saga/effects';

function* watchUpdateState() {
    yield takeEvery('add', updateState);
    yield takeEvery('delete', updateState);
    yield takeEvery('addComment', updateState);
    yield takeEvery('deleteComment', updateState);

}

function* updateState() {
    
    const update = JSON.stringify(yield select(x => x.itemsBase));
    localStorage.setItem('itemsBase', update);
}

export default watchUpdateState;