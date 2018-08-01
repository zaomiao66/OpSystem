import * as ActionTypes from '../const/ActionTypes';
import React from 'react'

// const initMID = -1;
// console.log("state22222",state)
export default function midSearch(state={} , action) {
    console.log("3333333333",action.value)
    switch (action.type) {

        case ActionTypes.MID_SEARCH:{
            const newState=action.state;


            console.log("midSearch",newState)

            return newState;
        }


        default:
            return state;
    }
}