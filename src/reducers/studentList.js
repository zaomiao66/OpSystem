import * as ActionTypes from '../const/ActionTypes';
import React from 'react'

export default function studentList(state = [], action) {
    switch (action.type) {
        case `${ActionTypes.GET_STUDENT_LIST}_SUC`:{
            const newState=action.data;
             console.log("studentList",newState)
            return newState;
        }

        case ActionTypes.MID_SEARCH:{
            const { value } = action;
            const { studentList } = state;
            const res = studentList.filter(item => {
                return (item.mid).toString() === value
            });
            return Object.assign({},studentList,
                res
            )


        }

        default:
            return state;
    }
}