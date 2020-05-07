import {all, takeEvery, put, call, take} from 'redux-saga/effects';
import actions from './actions';

import {createBrowserHistory} from "history";

const history = createBrowserHistory()

const listContacts = async (requestOptions, actionName) =>
    await fetch(
        `google.cmo`, requestOptions
    )
        .then(res => res.json())
        .then(res => res)
        .catch(error => error);


export function* getContacts() {
    try {
        yield put({
            type: actions.LOADING
        });
        const {data, error} = yield call(
            listContacts
        );
        if (data && data.contacts && data.contacts.rows.length > 0) {
            yield put({
                type: actions.UPDATE_CONTACTS,
                contacts: data.contacts,
            });
        } else {
            yield put({
                type: actions.UPDATE_CONTACTS,
                contacts: [],
            });
        }
        if (error) throw error;
    } catch (error) {
        console.log(error)
    }
}

export default function* rootSaga() {
    yield all([
        yield takeEvery(actions.GET_CONTACTS, getContacts)
    ]);
}
