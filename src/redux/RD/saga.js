import {all, takeEvery, put, call, take} from 'redux-saga/effects';
import actions from './actions';

import {createBrowserHistory} from "history";

const history = createBrowserHistory()

const listRds = async (requestOptions, actionName) =>
    await fetch(
        `google.cmo`, requestOptions
    )
        .then(res => res.json())
        .then(res => res)
        .catch(error => error);


export function* getRds() {
    try {
        yield put({
            type: actions.LOADING
        });
        const {data, error} = yield call(
            listRds
        );
        if (data && data.rds && data.rds.rows.length > 0) {
            yield put({
                type: actions.UPDATE_RD,
                rds: data.rds,
            });
        } else {
            yield put({
                type: actions.UPDATE_RD,
                rds: [],
            });
        }
        if (error) throw error;
    } catch (error) {
        console.log(error)
    }
}

export default function* rootSaga() {
    yield all([
        yield takeEvery(actions.GET_RD, getRds)
    ]);
}
