import {all, takeEvery, put, call, take} from 'redux-saga/effects';
import actions from './actions';

import {createBrowserHistory} from "history";

const history = createBrowserHistory()

const listNews = async (requestOptions, actionName) =>
    await fetch(
        `google.cmo`, requestOptions
    )
        .then(res => res.json())
        .then(res => res)
        .catch(error => error);


export function* getNews() {
    try {
        yield put({
            type: actions.LOADING
        });
        const {data, error} = yield call(
            listNews
        );
        if (data && data.news && data.news.rows.length > 0) {
            yield put({
                type: actions.UPDATE_NEWS,
                news: data.news,
            });
        } else {
            yield put({
                type: actions.UPDATE_NEWS,
                news: [],
            });
        }
        if (error) throw error;
    } catch (error) {
        console.log(error)
    }
}

export default function* rootSaga() {
    yield all([
        yield takeEvery(actions.GET_NEWS, getNews)
    ]);
}
