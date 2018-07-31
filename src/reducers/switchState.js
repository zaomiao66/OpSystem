
import * as ActionTypes from '../const/ActionTypes';
import React from 'react'
import './switchState.css'
const initState = {


    historyLessonsList : [{
        key: '1',
        classInfo: {id:98858,
                     name:"高级班"},
        status: 1,
        startTime: '2017-04-30',
        enterRate:'21/21',
        homeworkSubmitRate:'80%',
        beCommenttedRate:'100%',
        signRate:'5/21',
        satisfyRate:'90%',
        teacherInfo:{
            id:76544,
            mid:"98676",
            nick:"小白老师",
            realName:"白帆",
            wxCode:"fgg"
        }
    }],

    currentLessonsList : [{
        key: '1',
        classInfo: {id:98858,
            name:"高级班"},
        status: 1,
        startTime: '2017-04-30',
        enterRate:'21/21',
        homeworkSubmitRate:'80%',
        beCommenttedRate:'100%',
        signRate:'5/21',
        satisfyRate:'90%',
        teacherInfo:{
            id:76544,
            mid:"98676",
            nick:"小白老师",
            realName:"白帆",
            wxCode:"fgg"
        }
    }, {
        key: '2',
        classInfo: {id:98858,
            name:"高级班"},
        status: 1,
        startTime: '2017-04-30',
        enterRate:'21/21',
        homeworkSubmitRate:'80%',
        beCommenttedRate:'100%',
        signRate:'5/21',
        satisfyRate:'90%',
        teacherInfo:{
            id:76544,
            mid:"98676",
            nick:"小白老师",
            realName:"白帆",
            wxCode:"fgg"
        }
    }]
};

export default function todoList(state = initState, action) {
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

