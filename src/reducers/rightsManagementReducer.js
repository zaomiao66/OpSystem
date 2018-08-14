import * as ActionTypes from '../const/ActionTypes';
import React from 'react'

export default function rightsManagementReducer(state = {
    root:101,
    lesson:{ 101: {
        id: 101,
        name: "所有课程",
        children: [1001, 1002],
    },
    1001: {
        id: 1001,
        name: "理工类",
        children: [10001, 10002, 10003]

    },
    1002: {
        id: 1002,
        name: "人文类",
        children: [10004]
    },
    10001: {
        id:10001,
        name: "通信原理",
        children: [],
        users: [100001, 100002, 100007, 100008]
    },
    10002: {
        id:10002,
        name: "模拟电路",
        children: [],
        users: [100003, 100004, 100009, 100010, 100013]
    },
    10003: {
        id:10003,
        name: "高等数学",
        children: [],
        users: [100005, 100006, 100011, 100012]
    },
    10004: {
        id:10004,
        name: "学术写作",
        children: [],
        users: [100001, 100002, 100007, 100008]

    },
},

    teachers:{
        100001:{
            name:"黄老师",
            mid: 100001,
            isSelect:false,
            isSelectLeft:false
        },
        100002:{
            name:"张老师",
            mid: 100002,
            isSelect:false,
            isSelectLeft:false
        },
        100003:{
            name:"王老师",
            mid: 100003,
            isSelect:false,
            isSelectLeft:false
        },
        100004:{
            name:"李老师",
            mid: 100004,
            isSelect:false,
            isSelectLeft:false
        },
        100005:{
            name:"赵老师",
            mid: 100005,
            isSelect:false,
            isSelectLeft:false
        },
        100006:{
            name:"孙老师",
            mid: 100006,
            isSelect:false,
            isSelectLeft:false
        },
        100007:{
            name:"张老师",
            mid: 100007,
            isSelect:false,
            isSelectLeft:false
        },
        100008:{
            name:"章老师",
            mid: 100008,
            isSelect:false,
            isSelectLeft:false
        },
        100009:{
            name:"纪老师",
            mid: 100009,
            isSelect:false,
            isSelectLeft:false
        },
        100010:{
            name:"王老师",
            mid: 100010,
            isSelect:false,
            isSelectLeft:false
        },
        100011:{
            name:"永老师",
            mid: 100011,
            isSelect:false,
            isSelectLeft:false
        },
        100012:{
            name:"孙老师",
            mid: 100012,
            isSelect:false,
            isSelectLeft:false
        },
        100013:{
            name:"周老师",
            mid: 100013,
            isSelect:false,
            isSelectLeft:false
        },
    },
    teachersInRight:[],
    teachersInLeft:[100001,100002,100006,100007,100008],
    teachersInRightSelected:[],
    teachersInLeftSelected:[],
    leftIsSearching:false,
    rightIsSearching:false,
    leftSearch:[],
    rightSearch:[],
    isShow:false,
}, action) {
    switch (action.type) {

        //获得右边的信息
        case ActionTypes.GET_TEACHERS_RIGHT:{
            const id =action.id;
            // console.log("studentList",id)
            console.log("teachersInRight",state);
            const newState = [...state.lesson[id].users]
            console.log("newState",newState)
            const teachersInRight = newState.map(id =>state.teachers[id])
            console.log("teachersInRight",teachersInRight)
            return {
                ...state,
                teachersInRight:teachersInRight
            };
        }
        //选中右边的按钮
        case ActionTypes.SELECT_TEACHERS_RIGHT:{
            const mid = action.mid;
            const newState = {...state};
            newState.teachers[mid].isSelect = !newState.teachers[mid].isSelect;
            if(newState.teachersInRightSelected.indexOf(mid) === -1){
                newState.teachersInRightSelected.push(mid);
                    }
                    else{
                let result = [];
                    for(let i = 0; i<newState.teachersInRightSelected.length;i++){
                        if(newState.teachersInRightSelected[i]!==mid){
                            result.push(newState.teachersInRightSelected[i]);
                        }
                    }
                    newState.teachersInRightSelected = result;
            }
            console.log("newState.teachersInRightSelected",newState.teachersInRightSelected);
            return newState;
        }
        //增加到左边
        case ActionTypes.ADD_TEACHERS_LEFT:{
            console.log(state.teachersInLeft,"teachersInLeft ")
            if(state.teachersInRightSelected.length!==0) {
                const newState = {...state};
                let result = [];
                for (let t = 0; t < newState.teachersInRightSelected.length; t++) {
                    let mid = newState.teachersInRightSelected[t];

                    const teachersInLeft = newState.teachersInLeft
                    for (let i = 0; i < teachersInLeft.length; i++) {
                        let ele = teachersInLeft[i];
                        if (result.indexOf(ele) === -1) {
                            result.push(ele);
                        }
                    }
                    if (result.indexOf(mid) === -1) {
                        result.push(mid);
                    }
                }
                newState.teachersInLeft = result;
                return newState;
            }
            return state;
        }
        //选中左边的老师
        case ActionTypes.SELECT_TEACHERS_LEFT:{
            const mid = action.mid;
            const newState = {...state};
            newState.teachers[mid].isSelectLeft = !newState.teachers[mid].isSelectLeft;
            if(newState.teachersInLeftSelected.indexOf(mid) === -1){
                newState.teachersInLeftSelected.push(mid);
            }
            else{
                let result = [];
                for(let i = 0; i<newState.teachersInLeftSelected.length;i++){
                    if(newState.teachersInLeftSelected[i]!==mid){
                        result.push(newState.teachersInLeftSelected[i]);
                    }
                }
                newState.teachersInLeftSelected = result;
            }
            console.log("newState.teachersInLeftSelected",newState.teachersInLeftSelected);
            return newState;
        }

        //删除左边
        case ActionTypes.DELETE_TEACHER_LEFT:{

            const newState = {...state};
            for (let t = 0; t < newState.teachersInLeftSelected.length; t++) {
                if(newState.teachersInLeft.indexOf(newState.teachersInLeftSelected[t]) !== -1){
                    const idx = newState.teachersInLeft.indexOf(newState.teachersInLeftSelected[t]);

                    let mid = newState.teachersInLeftSelected[t]; ///问题在于没有清空数组
                    console.log("mid",mid)
                    newState.teachers[mid].isSelectLeft=false;
                    newState.teachersInLeft.splice(idx,1);
                }

            }newState.teachersInLeftSelected = [];
            return newState
        }

        //搜索左边
        case ActionTypes.SEARCH_TEACHER_NAME_LEFT:{
            const mid = action.value;
            const newState = {...state};
            if(!mid){
                newState.leftIsSearching = false;
                return newState
            }
            let _mid =-1;
            for(let item in newState.teachers) {
                if (newState.teachers[item].mid === parseInt(mid,10)) {
                    _mid = item
                }

            }
            console.log("qqqq",_mid);
            if( _mid!==-1) {
                console.log("qqqq",_mid);
                const teachersInLeft = newState.teachersInLeft;
                let result = [];
                for(let i = 0; i<teachersInLeft.length;i++){
                    if(teachersInLeft[i] === parseInt(_mid,10)){
                        result.push(_mid);
                    }
                }
                newState.leftSearch = result;

                // return newState
            }else{
                newState.leftSearch = [];
            }
            newState.leftIsSearching = true;
            console.log("newState",newState)
            return newState;
        }
        case ActionTypes.OPEN_RIGHTS_MANAGEMENT:{
           const newState = { ...state };
           newState.isShow = true;
           return newState
        }

        case ActionTypes.CLOSE_RIGHTS_MANAGEMENT:{
            const newState = { ...state };
            newState.isShow = false;
            return newState
        }
        //搜索右边
        case ActionTypes.SEARCH_TEACHER_NAME_RIGHT:{
            const mid = action.value;
            const newState = {...state};
            if(!mid){
                newState.rightIsSearching = false;
                return newState
            }
            let _mid =-1;
            for(let item in newState.teachers) {
                if (newState.teachers[item].mid === parseInt(mid,10)) {
                    _mid = item
                }

            }
            console.log("qqqq",_mid);
            if( _mid!==-1) {
                console.log("qqqq",_mid);
                const teachersInRight = newState.teachersInRight;
                console.log("qqqq",newState);
                let result = [];
                for(let i in teachersInRight){
                    if(teachersInRight[i].mid === parseInt(_mid,10)){
                        result.push(_mid);
                        console.log("qqqq",_mid);
                    }
                }
                newState.rightSearch = result;

                // return newState
            }else{
                newState.rightSearch = [];
            }
            newState.rightIsSearching = true;
            console.log("newState",newState);
            return newState;
        }

        default:
            return state;
    }
}