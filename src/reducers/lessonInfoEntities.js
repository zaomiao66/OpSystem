import * as ActionTypes from '../const/ActionTypes'
import { combineReducers } from 'redux'

function classes(state = {}, action) {
    switch (action.type) {
        case `${ActionTypes.FETCH_LESSON_INFO}_SUC`:{
            console.log("3333333",action);
            const entitiesCurrent = action.data.current.entities;
            const entitiesHistory = action.data.history.entities;
            return{
                ...state,
                ...entitiesCurrent.classes,
                ...entitiesHistory.classes
            }
        }
        default:
            return state;
    }
}

function teachers (state = {},action){
    switch(action.type){
        case `${ActionTypes.FETCH_LESSON_INFO}_SUC`: {
            const entitiesCurrent = action.data.current.entities;
            const entitiesHistory = action.data.history.entities;
            return {
                ...state,
                ...entitiesCurrent.teachers,
                ...entitiesHistory.teachers
            };
        }
        default:
            return state;
    }
}

function lessonInfo (state = {},action){
    switch(action.type){
        case `${ActionTypes.FETCH_LESSON_INFO}_SUC`: {
            const entitiesCurrent = action.data.current.entities;
            const entitiesHistory = action.data.history.entities;
            return {
                ...state,
                ...entitiesCurrent.lessonEntities,
                ...entitiesHistory.lessonEntities
            };
        }
        default:
            return state;
    }
}

function result(state={
    currentLessonIds: [],
    historyLessonIds: []
}, action) {
    switch (action.type) {
        case `${ActionTypes.FETCH_LESSON_INFO}_SUC`:
            const entitiesCurrent = action.data.current;
            const entitiesHistory = action.data.history;
            return { ...state,
                currentLessonIds: entitiesCurrent.result,
                historyLessonIds: entitiesHistory.result,
            }
        default:
            return state
    }
}

export default combineReducers({
    classes,
    teachers,
    lessonInfo,
    result
});