import { combineReducers } from 'redux';
import messageState from './userInfo';
import switchState from './tableInfo';

export default combineReducers({
    messageState,
    switchState
});

