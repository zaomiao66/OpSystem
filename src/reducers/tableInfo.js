
import * as ActionTypes from '../const/ActionTypes';
import React from 'react'
import './tableInfo.css'


export default function todoList(state = [], action) {
    switch (action.type) {
    case `${ActionTypes.FETCH_LESSON_INFO}_SUC`:{
        const newState=action.data.data;
        console.log("table",newState)
        return newState;
    }

        default:
                return state;
    }
}

