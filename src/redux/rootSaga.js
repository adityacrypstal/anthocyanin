import { put, takeEvery, all } from 'redux-saga/effects';
import blogSaga from './Blog/saga';
import careerSaga from './Career/saga'
import categorysaga from './Category/saga'
import contactSaga from './Contact/saga'
import newsSaga from './News/saga'
import productSaga from './Product/saga'
import rdSaga from './RD/saga'
export default function* rootSaga(getState) {

    yield all([
        blogSaga(),
        careerSaga(),
        categorysaga(),
        contactSaga(),
        newsSaga(),
        productSaga(),
        rdSaga()
    ]);
}
