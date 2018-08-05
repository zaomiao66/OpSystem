import { combineReducers } from 'redux';
import userInfo from './userInfo';
import lessonInfo from './lessfonInfo';
import studentList from './studentList'
import classInfo from './classInfo';
import satisfiledList from './satisfiledList'

// import midSearch from './midSearch'
export default combineReducers({
    userInfo,
    lessonInfo,
    studentList,
    classInfo,
    satisfiledList,
    // midSearch
});

