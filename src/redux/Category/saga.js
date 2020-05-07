import {all, takeEvery, put, call, take} from 'redux-saga/effects';
import actions from './actions';

import {createBrowserHistory} from "history";

const history = createBrowserHistory()

const listCategories = async (requestOptions, actionName) =>
    await fetch(
        `google.cmo`, requestOptions
    )
        .then(res => res.json())
        .then(res => res)
        .catch(error => error);


export function* getCategories() {
    try {
        yield put({
            type: actions.LOADING
        });
        const {data, error} = yield call(
            listCategories
        );
        if (data && data.categories && data.categories.rows.length > 0) {
            yield put({
                type: actions.UPDATE_CATEGORIES,
                categories: data.categories,
            });
        } else {
            yield put({
                type: actions.UPDATE_CATEGORIES,
                categories: [],
            });
        }
        if (error) throw error;
    } catch (error) {
        console.log(error)
    }
}

export default function* rootSaga() {
    yield all([
        yield takeEvery(actions.GET_CATEGORIES, getCategories)
    ]);
}
