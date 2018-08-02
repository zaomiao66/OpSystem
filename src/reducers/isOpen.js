import * as ActionTypes from '../const/ActionTypes';
import React from 'react'

export default function isOpen(state = false, action) {
    switch (action.type) {
        case ActionTypes.OPEN_MODAL:{
            const newState=action.isOpen;
            // console.log("studentList",newState)
            return newState;
        }
        case ActionTypes.CLOSE_MODAL:{
            const newState=action.isOpen;
            // console.log("studentList",newState)
            return newState;
        }

        default:
            return state;
    }
}