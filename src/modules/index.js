import { combineReducers } from 'redux';
import change from './common/menuchange';
import user from './user/user';

const rootReducer = combineReducers({change,user});

export default rootReducer;