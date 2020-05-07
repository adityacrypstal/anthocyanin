import {all, takeEvery, put, call, take} from 'redux-saga/effects';
import actions from './actions';

import {createBrowserHistory} from "history";

const history = createBrowserHistory()

const listProducts = async (requestOptions, actionName) =>
    await fetch(
        `google.cmo`, requestOptions
    )
        .then(res => res.json())
        .then(res => res)
        .catch(error => error);


export function* getProducts() {
    try {
        yield put({
            type: actions.LOADING
        });
        const {data, error} = yield call(
            listProducts
        );
        if (data && data.products && data.products.rows.length > 0) {
            yield put({
                type: actions.UPDATE_PRODUCTS,
                products: data.products,
            });
        } else {
            yield put({
                type: actions.UPDATE_PRODUCTS,
                products: [],
            });
        }
        if (error) throw error;
    } catch (error) {
        console.log(error)
    }
}

export default function* rootSaga() {
    yield all([
        yield takeEvery(actions.GET_PRODUCTS, getProducts)
    ]);
}
