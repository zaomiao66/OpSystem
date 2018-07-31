
import * as ActionTypes from '../const/ActionTypes';
import React from 'react'
import './switchState.css'


export default function todoList(state = [], action) {
    switch (action.type) {
    case `${ActionTypes.FETCH_LESSON_INFO}_SUC`:{
        const newState=action.data;
        console.log("table",newState)
        return newState;
    }

        default:
                return state;
    }
}

