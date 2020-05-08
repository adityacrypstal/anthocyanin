import {all, takeEvery, put, call, take} from 'redux-saga/effects';
import actions from './actions';

import {createBrowserHistory} from "history";

const history = createBrowserHistory()

const listCareers = async (requestOptions, actionName) =>
    await fetch(
        `google.cmo`, requestOptions
    )
        .then(res => res.json())
        .then(res => res)
        .catch(error => error);


export function* getCareers() {
    try {
        yield put({
            type: actions.LOADING
        });
        const {data, error} = yield call(
            listCareers
        );
        if (data && data.careers && data.careers.rows.length > 0) {
            yield put({
                type: actions.UPDATE_CAREERS,
                careers: data.careers,
            });
        } else {
            yield put({
                type: actions.UPDATE_CAREERS,
                careers: [],
            });
        }
        if (error) throw error;
    } catch (error) {
        console.log(error)
    }
}

export default function* rootSaga() {
    yield all([
        yield takeEvery(actions.GET_CAREERS, getCareers)
    ]);
}
