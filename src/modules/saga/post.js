import { all, takeLatest,fork,put,delay } from "redux-saga/effects";
import {ADD_POST_REQUEST,ADD_POST_SUCCESS,ADD_POST_FAILURE} from '../post/post'




function* addPost(action) {
    yield delay(1000);
    try {
        yield put ({
            type :ADD_POST_SUCCESS,
            data:action.data
        })
    } catch(e) {
        yield put ({
            type:ADD_POST_FAILURE,
            data:e.response.data
        })
    }
}


function* watchaddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost)
}



export default function* postSaga() {
    yield all([
        fork(watchaddPost),
    ])
}