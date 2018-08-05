import * as ActionTypes from '../const/ActionTypes';
import React from 'react'
import {CHANGE_REPLY_STATUS} from "../const/ActionTypes";

export default function satisfiledList(state = {

        // class_info:{},
        // teacher_info:{}
      satisfiledList:{list:[]}
}, action) {
    switch (action.type) {
        case `${ActionTypes.GET_SATISFILED_LIST}_SUC`:{
            const newState=action.data.data;
            // console.log("studentList",newState)
            return newState;
        }

        case CHANGE_REPLY_STATUS:{
            const newState = {...state};
            // console.log('12312312312',state)
            newState.list.filter(item =>{
                if(item.class_info.id === action.classId){
                    item.reply_status = !item.reply_status;
                }
            })
            return newState;
        }

        default:
            return state;
    }
}