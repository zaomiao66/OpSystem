import * as actionTypes from "../const/ActionTypes";
import React from 'react'
import './switchState.css'
const initState = {

    columns : [{
        title: '班级',
        dataIndex: 'learningClass',
        key:'learningClass',
        // render: text => <a href="javascript:;">{text}</a>,
    }, {
        title: '课程状态',
        dataIndex: 'status',
        key:'status'
    }, {
        title: '开课时间',
        dataIndex: 'time',
        key:'time'

    }, {
        title: '老师',
        dataIndex: 'teacher',
        key:'teacher'
    }, {
        title: '上课率',
        dataIndex: 'class_rate',
        key:'class_rate',
        render: text => {
            let myArray=new Array()
            myArray = text.split("/")
            console.log("x",myArray)
            if(myArray[0]/myArray[1]<0.8)return<a className="redWord">{text}</a>;
            else if(myArray[0]/myArray[1]>0.95)return<a className="orangeWord">{text}</a>;
            return <div>{text}</div>
        },

    }, {
        title: '作业提交率',
        dataIndex: 'homework_rate',
        key:'homework_rate',
        render: text => {
            console.log(parseFloat(text))
            if(parseFloat(text)<80)return<a className="redWord">{text}</a>;
            else if(parseFloat(text)>95)return<a className="orangeWord">{text}</a>;
            return <div>{text}</div>
        },
    }, {
        title: '被点评情况',
        dataIndex: 'comment_rate',
        key:'comment_rate',
        render: text => {
            console.log(parseFloat(text))
            if(parseFloat(text)<80)return<a className="redWord">{text}</a>;
            else if(parseFloat(text)>95)return<a className="orangeWord">{text}</a>;
            return <div>{text}</div>
        },
    }, {
        title: '打卡率',
        dataIndex: 'card_rate',
        key:'card_rate',
        render: text => {
            console.log(parseFloat(text))
            if(parseFloat(text)<80)return<a className="redWord">{text}</a>;
            else if(parseFloat(text)>95)return<a className="orangeWord">{text}</a>;
            return <div>{text}</div>
        },
    }, {
        title: '满意度',
        dataIndex: 'satisfaction_rate',
        key:'satisfaction_rate',
        render: text => {
            console.log(parseFloat(text))
            if(parseFloat(text)<80)return<a className="redWord">{text}</a>;
            else if(parseFloat(text)>95)return<a className="orangeWord">{text}</a>;
            return <div>{text}</div>
        },

    }],
    dataHistory : [{
        key: '1',
        learningClass: '高级班',
        status: '已结束',
        time: '2017-04-30',
        teacher:'小白老师',
        class_rate:'21/21',
        homework_rate:'80%',
        comment_rate:'100%',
        card_rate:'5/21',
        satisfaction_rate:'90%'
    }],

    dataNow : [{
        key: '1',
        learningClass: '高级班',
        status: '进行中',
        time: '2017-04-20',
        teacher:'小白老师',
        class_rate:'3/21',
        homework_rate:'67.98%',
        comment_rate:'87.98%',
        card_rate:'3/21',
        satisfaction_rate:'90.14%'
    }, {
        key: '2',
        learningClass: '进阶班',
        status: '进行中',
        time: '2017-04-21',
        teacher:'小白老师',
        class_rate:'5/21',
        homework_rate:'76.89%',
        comment_rate:'31.87%',
        card_rate:'5/21',
        satisfaction_rate:'98.14%'
    },{
        key: '3',
        learningClass: '提高班',
        status: '进行中',
        time: '2017-04-22',
        teacher:'小白老师',
        class_rate:'13/21',
        homework_rate:'13.89%',
        comment_rate:'21.76%',
        card_rate:'13/21',
        satisfaction_rate:'88.01%'
    },{
        key: '4',
        learningClass: '入门班',
        status: '进行中',
        time: '2017-04-22',
        teacher:'小白老师',
        class_rate:'20/21',
        homework_rate:'98.45%',
        comment_rate:'98.67%',
        card_rate:'20/21',
        satisfaction_rate:'30.10%'
    },{
        key: '5',
        learningClass: '体验班',
        status: '已结束',
        time: '2017-04-24',
        teacher:'小白老师',
        class_rate:'21/21',
        homework_rate:'31.54%',
        comment_rate:'78.76%',
        card_rate:'21/21',
        satisfaction_rate:'94.10%'
    },]
};

export default function todoList(state = initState, action) {
    switch (action.type) {
        case actionTypes.MORE_CHANCE: { //更多按钮弹出选择框
            const newState = { ...state };
            newState.idx = action.idx;
            newState.multipleChoice = action.multipleChoice;
            return newState;
        }
        case actionTypes.DELETE_MESSAGE: { //删除某一行元素后更改弹框状态
            const copeState = { ...state };
            const { multipleChoice } = action;
            copeState.multipleChoice = multipleChoice;
            return copeState;
        }
        case actionTypes.TOP_MESSAGE: { //置顶后更改弹框状态
            const _state = { ...state };
            _state.multipleChoice = action.multipleChoice
            return _state;
        }
        case actionTypes.DELETE_MORE_MESSAGES: { //点击多选删除更改弹框状态及显示勾框状态
            const newState = {...state};
            newState.idx = action.idx;
            newState.multipleChoice = action.multipleChoice;
            newState.isChecked = action.checked;
            return newState;
        }
        case actionTypes.OVER_DELETE: { //取消点击后更改勾框状态
            const newState = {...state};
            newState.isChecked = action.item
            return newState;
        }
        case actionTypes.ADD_DELETE_ARRAY: { //点击勾框将index值加入删除数组
            const newState = {...state};
            newState.deleteArray = action.item;
            return newState;
        }
        case actionTypes.DELETE_ITEM: { //批量删除后更改勾框状态
            const newState = {...state};
            newState.isChecked = action.isChecked;
            return newState;
        }
        default:
                return state;
    }
}

