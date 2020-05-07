import {all, takeEvery, put, call, take} from 'redux-saga/effects';
import actions from './actions';

import {createBrowserHistory} from "history";

const history = createBrowserHistory()

const listBlogs = async (requestOptions, actionName) =>
    await fetch(
        `google.cmo`, requestOptions
    )
        .then(res => res.json())
        .then(res => res)
        .catch(error => error);


export function* getBlogs() {
    try {
        yield put({
            type: actions.LOADING
        });
        const {data, error} = yield call(
            listBlogs
        );
        if (data && data.blogs && data.blogs.rows.length > 0) {
            yield put({
                type: actions.UPDATE_BLOGS,
                blogs: data.blogs,
            });
        } else {
            yield put({
                type: actions.UPDATE_BLOGS,
                blogs: [],
            });
        }
        if (error) throw error;
    } catch (error) {
        console.log(error)
    }
}

export default function* rootSaga() {
    yield all([
        yield takeEvery(actions.GET_BLOGS, getBlogs)
    ]);
}
