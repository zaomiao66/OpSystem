import { combineReducers } from 'redux';
import userInfo from './userInfo';
import lessonInfo from './lessfonInfo';
// import studentList from './studentList'
import classInfo from './classInfo';
// import satisfiledList from './satisfiledList'
import satisfiedEntities from './satisfiedEntities'
import lessonInfoEntities from './lessonInfoEntities'
import studentListEntities from './studentListEntities'
import homeworkReducer from './homeworkReducer'

// import midSearch from './midSearch'
export default combineReducers({
    userInfo,
    // lessonInfo,
    // studentList,
    classInfo,
    // satisfiledList,
    satisfiedEntities,
    lessonInfoEntities,
    studentListEntities,
    // midSearch
    homeworkReducer
});

