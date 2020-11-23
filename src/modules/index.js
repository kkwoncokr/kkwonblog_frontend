import { combineReducers } from 'redux';
import change from './common/menuchange';
import user from './user/user';
import post from './post/post';

import { all,fork } from 'redux-saga/effects';
import userSaga from './saga/user';

const rootReducer = combineReducers({change,user,post});

export function* rootSaga() {
    yield all([
        fork(userSaga),
    ])
}

export default rootReducer;