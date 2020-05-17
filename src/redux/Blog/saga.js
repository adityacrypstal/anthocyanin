import {all, takeEvery, put, call, take} from 'redux-saga/effects';
import actions from './actions';
import datas from './data.json'
import {createBrowserHistory} from "history";
import config from '../../config'
const delay = time => new Promise(resolve => setTimeout(resolve, time));

const history = createBrowserHistory()

const listBlogs = async (requestOptions, actionName) =>
    await fetch(
        `${config.API_URL}/api/cms/get_blogs`, requestOptions
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
        if (data) {
            yield put({
                type: actions.UPDATE_BLOGS,
                blogs: data,
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
