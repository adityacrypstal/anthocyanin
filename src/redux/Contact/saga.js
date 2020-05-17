import {all, takeEvery, put, call, take} from 'redux-saga/effects';
import actions from './actions';
import swal from "sweetalert";
import {createBrowserHistory} from "history";
import config from '../../config'

const history = createBrowserHistory()

const postInfo = async (requestOptions) => {
    await fetch(
        `${config.API_URL}/api/enquiry/save_contact_us`,
        requestOptions
    )
        .then(res => {
            swal({
                title: "Success",
                text: "Thank You For Contacing Us!",
                icon: "success",
                buttons: false,
                timer: 2000
            });
        })
        .catch(error => {
            swal({
                title: "Oops",
                text: "Please Fill All Fields!",
                icon: "error",
                buttons: false,
                timer: 2000
            })
        });
}


export function* postContact({payload}) {
    try {
        yield put({
            type: actions.LOADING
        });
        yield call(
            postInfo,
            {body: getFormData(payload), method: 'POST'}
        );

    } catch (error) {
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
        yield takeEvery(actions.SUBMIT_CONTACT, postContact)
    ]);
}
