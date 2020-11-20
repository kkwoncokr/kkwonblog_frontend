import { combineReducers } from 'redux';
import change from './common/menuchange';
import user from './user/user';
import post from './post/post';

const rootReducer = combineReducers({change,user,post});

export default rootReducer;