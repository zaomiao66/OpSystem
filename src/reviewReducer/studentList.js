import * as ActionTypes from '../const/ActionTypes';
import React from 'react'

const initState = {
    studentList:[],
    filterList:[],
    isSeached:false
};

export default function studentList(state = initState, action) {
    switch (action.type) {
        case `${ActionTypes.GET_STUDENT_LIST}_SUC`:{
            const newState = { ...state };
                newState.studentList=action.data.data;
             console.log("studentList",newState)
            return newState;
        }

        case ActionTypes.MID_SEARCH:{
            const { value } = action;
            if(!value){
                return {
                    ...state,
                    isSeached:false
                }
            }
            // const  studentList = state;
            const newState = {...state};
            console.log("stAte", newState);
            newState.filterList.length=0;
            const res = state.studentList.filter(item => {
                return (item.mid).toString() === value
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