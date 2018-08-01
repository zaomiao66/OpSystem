import * as ActionTypes from '../const/ActionTypes';
import React from 'react'

export default function classInfo(state = {
    basic_info:{
        real_teacher:{},
        virtual_teacher:{}
    }
}, action) {
    switch (action.type) {
        case `${ActionTypes.GET_CLASS_INFO}_SUC`:{
            const newState=action.data;
            // console.log("studentList",newState)
            return newState;
        }

        default:
            return state;
    }
}