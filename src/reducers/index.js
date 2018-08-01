import { combineReducers } from 'redux';
import messageState from './userInfo';
import switchState from './tableInfo';
import studentList from './studentList'
import classInfo from './classInfo';
// import midSearch from './midSearch'
export default combineReducers({
    messageState,
    switchState,
    studentList,
    classInfo,
    // midSearch
});

