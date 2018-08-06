import * as ActionTypes from '../const/ActionTypes'
import { combineReducers } from 'redux'

const initState = {
    entities:{},
    studentIds: [],
    filterList:[],
    isSeached:false
};

function studentReducer(state = initState, action) {
    switch (action.type) {
        case `${ActionTypes.GET_STUDENT_LIST}_SUC`:{
            console.log("3333333",action)
            const data = action.data;
            return{
                ...state,
                studentIds: [
                    ...data.result
                ],
                entities:{
                    ...state.entities,
                    ...data.entities.studentListEntities
                }

            }
        }
        default:
            return state;
    }
}






export default combineReducers({
    studentReducer,

});