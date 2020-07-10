import {all, takeEvery, put, call, take} from 'redux-saga/effects';
import actions from './actions';
import {useHistory} from 'react-router-dom'
import config from '../../config'
import swal from "sweetalert";


const listCareers = async () =>
    await fetch(
        `${config.API_URL}/api/cms/get_careers`,
    )
        .then(res => res.json())
        .then(res => res)
        .catch(error => error);

const applyCareer = async (requestOptions) =>

    await fetch(
        `${config.API_URL}/api/career/save_job_application`,
        requestOptions
    )
        .then(res => {
            swal({
                title: "Success",
                text: "Thank You For Applying!",
                icon: "success",
                buttons: false,
                timer: 2000
            });
            window.location.href = '/careers'
        })
        .catch(error => {
            swal({
                title: "Error",
                text: "Something Went Wrong",
                icon: "error",
                buttons: false,
                timer: 2000
            });
        });


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

export function* applyCareers({payload}) {
    try {
        yield put({
            type: actions.APPLYING
        });

        const {data, error} = yield call(
            applyCareer,
            {body: getFormData(payload), method: 'POST'}
        );
        yield put({
            type: actions.APPLIED
        });
        if (error) throw error;
    } catch (error) {
        yield put({
            type: actions.APPLIED
        });
        console.log(error)
    }
}

function getFormData(object) {
    const formData = new FormData();
    Object.keys(object).forEach(key => formData.append(key, object[key]));
    return formData;
}

export default function* rootSaga() {
    yield all([
        yield takeEvery(actions.GET_CAREERS, getCareers),
        yield takeEvery(actions.APPLY_CAREERS, applyCareers)
    ]);
}
