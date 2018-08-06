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

        case ActionTypes.MID_SEARCH:{
            // console.log("sbbb",action)
            const { value } = action;
            if(!value){
                return {
                    ...state,
                    isSeached:false
                }
            }
            // const  studentList = state;
            const newState = {...state};
            newState.filterList.length=0;
            const res = state.studentIds.filter(item => {
                return item.toString() === value
            });
            newState.filterList = res;
            newState.isSeached = true;
            console.log("stAte", newState);
            return newState;
        }
        default:
            return state;
    }
}






export default combineReducers({
    studentReducer,

});