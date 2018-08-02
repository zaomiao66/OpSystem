import * as ActionTypes from '../const/ActionTypes';
import React from 'react'

export default function satisfiledList(state = {

        class_info:{},
        teacher_info:{}

}, action) {
    switch (action.type) {
        case `${ActionTypes.GET_SATISFILED_LIST}_SUC`:{
            const newState=action.data.data;
            // console.log("studentList",newState)
            return newState;
        }

        default:
            return state;
    }
}