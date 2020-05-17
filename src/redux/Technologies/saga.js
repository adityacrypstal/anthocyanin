import {all, takeEvery, put, call, take} from 'redux-saga/effects';
import actions from './actions';
import datas from './data.json'

import {createBrowserHistory} from "history";
import config from '../../config';
const history = createBrowserHistory()

const listTechnologies = async (requestOptions, actionName) =>
    await fetch(
        `${config.API_URL}/api/cms/get_technologies`, requestOptions
    )
        .then(res => res.json())
        .then(res => res)
        .catch(error => error);


export function* getTechnologies() {
    try {
        yield put({
            type: actions.LOADING
        });
        const {data, error} = yield call(
            listTechnologies
        );
        // const data = datas;
        // const error = null;
        if (data) {
            yield put({
                type: actions.UPDATE_TECHNOLOGIES,
                technologies: data,
            });
        } else {
            yield put({
                type: actions.UPDATE_TECHNOLOGIES,
                technologies: [],
            });
        }
        if (error) throw error;
    } catch (error) {
        console.log(error)
    }
}

export default function* rootSaga() {
    yield all([
        yield takeEvery(actions.GET_TECHNOLOGIES, getTechnologies)
    ]);
}
