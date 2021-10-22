import { takeEvery, put } from 'redux-saga/effects';

function* watchUpdateState() {
    yield takeEvery('add', updateState);
    yield takeEvery('delete', updateState);
    yield takeEvery('addComment', updateState);
    yield takeEvery('deleteComment', updateState);

}

function* updateState() {
    console.log(localStorage.getItem('itemsBase'));
    yield put({type: 'updateState'})
}

export default watchUpdateState;