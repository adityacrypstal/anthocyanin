import {all, takeEvery, put, call, take} from 'redux-saga/effects';
import actions from './actions';
import datas from './data.json'
import config from '../../config'
import {createBrowserHistory} from "history";

const delay = time => new Promise(resolve => setTimeout(resolve, time));

const history = createBrowserHistory()

const listCareers = async () =>
    await fetch(
        `${config.API_URL}/api/cms/get_careers`,
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
        // const data = datas;
        // const error = null;
        if (data) {
            yield put({
                type: actions.UPDATE_CAREERS,
                careers: data,
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
