import {all, takeEvery, put, call, take} from 'redux-saga/effects';
import actions from './actions';
import datas from './data.json';
import recent from './recent.json';
import {createBrowserHistory} from "history";

const history = createBrowserHistory()
const delay = time => new Promise(resolve => setTimeout(resolve, time));

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
        //
        const data = datas;
        const error = null;
        yield call(delay, 2000)

        if (data) {
            yield put({
                type: actions.UPDATE_NEWS,
                news: data,
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
export function* getRecent() {
    try {
        yield put({
            type: actions.LOADING_RECENT
        });
        // const {data, error} = yield call(
        //     listNews
        // );
        yield call(delay, 2000)
        const data = recent;
        const error = null
        if (data) {
            yield put({
                type: actions.UPDATE_RECENT,
                recent: data,
            });
        } else {
            yield put({
                type: actions.UPDATE_RECENT,
                recent: [],
            });
        }
        if (error) throw error;
    } catch (error) {
        console.log(error)
    }
}

export default function* rootSaga() {
    yield all([
        yield takeEvery(actions.GET_NEWS, getNews),
        yield takeEvery(actions.GET_RECENT, getRecent)
    ]);
}
