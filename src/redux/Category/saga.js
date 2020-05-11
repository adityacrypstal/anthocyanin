import {all, takeEvery, put, call, take} from 'redux-saga/effects';
import actions from './actions';
import datas from './data.json';
import {createBrowserHistory} from "history";
const delay = time => new Promise(resolve => setTimeout(resolve, time));

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
        // const {data, error} = yield call(
        //     listCategories
        // );
        yield call(delay,2000)
        const data = datas;
        const error = null;
        if (data) {
            yield put({
                type: actions.UPDATE_CATEGORIES,
                categories: data,
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
export function* getCategory({payload}) {
    try {
        yield put({
            type: actions.LOADING
        });
        // const {data, error} = yield call(
        //     listCategories
        // );
        yield call(delay, 2000);

        const data = datas.find(data =>data.id=payload.id);
        const error = null;
        if (data) {
            yield put({
                type: actions.PUT_CATEGORY,
                category: data,
            });
        } else {
            yield put({
                type: actions.PUT_CATEGORY,
                category: {},
            });
        }
        if (error) throw error;
    } catch (error) {
        console.log(error)
    }
}

export default function* rootSaga() {
    yield all([
        yield takeEvery(actions.GET_CATEGORIES, getCategories),
        yield takeEvery(actions.GET_CATEGORY, getCategory)
    ]);
}
