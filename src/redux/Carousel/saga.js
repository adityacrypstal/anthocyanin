import {all, takeEvery, put, call, take} from 'redux-saga/effects';
import actions from './actions';
import config from '../../config';
import {createBrowserHistory} from "history";
import datas from './data.json';
const history = createBrowserHistory()


const listCarousels = async () =>
    await fetch(
        `${config.API_URL}/api/cms/get_home_carousel`
    )
        .then(res => res.json())
        .then(res => res)
        .catch(error => error);


export function* getCarousels() {
    try {
        yield put({
            type: actions.LOADING_CAROUSEL
        });
        const {data, error} = yield call(
            listCarousels
        );
        // const data = datas;
        // const error = null
        if (data) {
            yield put({
                type: actions.UPDATE_CAROUSEL,
                carousels: data,
            });
        } else {
            yield put({
                type: actions.UPDATE_CAROUSEL,
                carousels: [],
            });
        }
        if (error) throw error;
    } catch (error) {
        console.log(error)
    }
}

export default function* rootSaga() {
    yield all([
        yield takeEvery(actions.GET_CAROUSEL, getCarousels)
    ]);
}
