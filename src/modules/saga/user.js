import { all, takeLatest,fork,put,delay } from "redux-saga/effects";
import {LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE, 
    LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE
} from '../user/user';
function* login(action) {
    yield delay(1000);
    try {
        yield put ({
            type : LOGIN_SUCCESS,
            data:action.data
        })
    } catch(e) {
        yield put ({
            type:LOGIN_FAILURE,
            data:e.response.data
        })
    }
}

function* logout(action) {
    yield delay(1000);
    try {
        yield put ({
            type : LOGOUT_SUCCESS,
            data:action.data
        })
    } catch(e) {
        yield put ({
            type:LOGOUT_FAILURE,
            data:e.response.data
        })
    }
}

function* watchLogin() {
    yield takeLatest(LOGIN_REQUEST, login)
}
function* watchLogout() {
    yield takeLatest(LOGOUT_REQUEST, logout)
}

export default function* postSaga() {
    yield all([
        fork(watchLogin),
        fork(watchLogout),
    ])
}