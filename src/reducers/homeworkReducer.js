import * as ActionTypes from '../const/ActionTypes'
import { combineReducers } from 'redux'

const initState = {

};

function studentIds(state = [], action) {
    switch (action.type) {
        case `${ActionTypes.GET_HOME_WORK}_SUC`:{
            // console.log("3333333",action)
            const data = action.data;
            return data.result

        }
        default:
            return state;
    }
}

function author(state = initState, action) {
    switch (action.type) {
        case `${ActionTypes.GET_HOME_WORK}_SUC`:{
            // console.log("3333333",action)
            const data = action.data.entities;
            return{
                ...state.author,
                ...data.author
            }
        }
        default:
            return state;
    }
}

function comments(state = initState, action) {
    switch (action.type) {
        case `${ActionTypes.GET_HOME_WORK}_SUC`:{
            console.log("3333333",action)
            const data = action.data.entities;
            return{
                ...state.comments,
                ...data.commentsItem
            }
        }
        default:
            return state;
    }
}

function homework(state = initState, action) {
    switch (action.type) {
        case `${ActionTypes.GET_HOME_WORK}_SUC`:{
            console.log("3333333",action)
            const data = action.data.entities;
            return{
                ...state.homework,
                ...data.homeworkIds
            }
        }
        default:
            return state;
    }
}



export default combineReducers({
    studentIds,
    author,
    comments,
    homework
});
