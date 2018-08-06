import * as ActionTypes from '../const/ActionTypes'
import { combineReducers } from 'redux'

function classes(state = {}, action) {
    switch (action.type) {
        case `${ActionTypes.GET_SATISFILED_LIST}_SUC`:{
        // console.log("3333333",action)
            const entities = action.data.entities;
            return{
                ...state,
                ...entities.classes
            }
        }
        default:
            return state;
    }
}

function teachers (state = {},action){
    switch(action.type){
        case `${ActionTypes.GET_SATISFILED_LIST}_SUC`: {
            const entities =  action.data.entities;
            return {
                ...state,
                ...entities.teachers
            };
        }
        default:
            return state;
    }
}

function satisfiled (state = {},action){
    switch(action.type){
        case `${ActionTypes.GET_SATISFILED_LIST}_SUC`: {
            const entities =  action.data.entities;
            return {
                ...state,
                ...entities.satisfiled
            };
        }
        case `${ActionTypes.CHANGE_REPLY_STATUS}`: {
            const { time } = action.params;

            const targetItem = { ...state[time] };
            targetItem.reply_status = 1;

            const nextState = { ...state, [time]: targetItem };
            return nextState
        }
        default:
            return state;
    }
}

function satisfied(state={}, action) {
    switch (action.type) {
        case `${ActionTypes.GET_SATISFILED_LIST}_SUC`:
            // console.log("9999999999",action)
            const result = action.data.result;
            return { ...state, result }
        default:
            return state
    }
}

export default combineReducers({
    classes,
    teachers,
    satisfiled,
    satisfied
});