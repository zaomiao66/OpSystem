import { combineReducers } from 'redux';
import messageState from './userInfo';
import switchState from './tableInfo';
import studentList from './studentList'
import classInfo from './classInfo';
import satisfiledList from './satisfiledList'
import isOpen from './isOpen'
// import midSearch from './midSearch'
export default combineReducers({
    messageState,
    switchState,
    studentList,
    classInfo,
    satisfiledList,
    isOpen
    // midSearch
});

