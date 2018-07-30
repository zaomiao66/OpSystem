import { combineReducers } from 'redux';
import messageState from './messageState';
import switchState from './switchState';

export default combineReducers({
    messageState,
    switchState
});

