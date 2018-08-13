import * as ActionTypes from '../const/ActionTypes';
import React from 'react'

export default function rightsManagementReducer(state = {
    classesTeacher:{
        name:"所有课程",
        classesId:[0,1,2],
    },
    classes:{
        0:{
            name:"通信原理",
            teachersId:[1001,1002,1007,1008]
        },
        1:{
            name:"模拟电路",
            teachersId:[1003,1004,1009,1010,1013]
        },
        2:{
            name:"高等数学",
            teachersId:[1005,1006,1011,1012]
        }
    },
    teachers:{
        1001:{
            name:"黄老师",
            mid: 1001
        },
        1002:{
            name:"张老师",
            mid: 1002
        },
        1003:{
            name:"王老师",
            mid: 1003
        },
        1004:{
            name:"李老师",
            mid: 1004
        },
        1005:{
            name:"赵老师",
            mid: 1005
        },
        1006:{
            name:"孙老师",
            mid: 1006
        },
        1007:{
            name:"张老师",
            mid: 1007
        },
        1008:{
            name:"章老师",
            mid: 1008
        },
        1009:{
            name:"纪老师",
            mid: 1009
        },
        1010:{
            name:"王老师",
            mid: 1010
        },
        1011:{
            name:"永老师",
            mid: 1011
        },
        1012:{
            name:"孙老师",
            mid: 1012
        },
        1013:{
            name:"周老师",
            mid: 1013
        },
    },
    teachersInRight:[],
    teachersInLeft:[1001,1002,1006,1007,1008]
}, action) {
    switch (action.type) {
        case ActionTypes.GET_TEACHERS_RIGHT:{
            const id =action.id;
            // console.log("studentList",id)

            const teachersInRight =  state.classes[id].teachersId.map(t =>{
                return state.teachers[t]
            });
            return {
                ...state,
                teachersInRight:teachersInRight
            };
        }
        // case ActionTypes.GET_TEACHERS_LEFT:{
        //
        // if(state.teachersInLeft.length!==0){
        //     const teachersInLeft =  state.teachersInLeft.map(t =>{
        //         return state.teachers[t]
        //     });
        //     return {
        //         ...state,
        //         teachersInLeft:teachersInLeft
        //     };
        // }
        //     return state;
        //
        // }

        case ActionTypes.ADD_TEACHERS_LEFT:{
            console.log(state.teachersInLeft,"teachersInLeft ")
            const  mid = action.mid;
            let result = [];
            // console.log("454554",mid)
            const teachersInLeft = state.teachersInLeft
            // teachersInLeft.push(mid)
            for(let i=0; i<teachersInLeft.length;i++){
                let ele = teachersInLeft[i];
                if(result.indexOf(ele) === -1){
                    result.push(ele);
                }
            }
            if(result.indexOf(mid) === -1){
                result.push(mid);
            }
            // console.log("454554",state.teachersInLeft)
            // console.log("454554",teachersInLeft)
            return {
                ...state,
                teachersInLeft:result
            };


        }
        case ActionTypes.DELETE_TEACHER_LEFT:{
            const mid = action.mid;
            const teachersInLeft = state.teachersInLeft;
            let result = [];
            for(let i = 0; i<teachersInLeft.length;i++){
                if(teachersInLeft[i]!==mid){
                    result.push(teachersInLeft[i]);
                }
            }
            return{
                ...state,
                teachersInLeft:result
            }
        }

        case ActionTypes.SEARCH_TEACHER_NAME_LEFT:{
            const name = action.value;
            // const _mid= state.teachers.map(item =>{
            //     if(item.name === name){
            //         return item.mid
            //     }
            //     return -1
            //     }
            // );
            // if( _mid!==-1) console.log(_mid)
            let _mid =-1;
            for(let item in state.teachers) {
                if (state.teachers[item].name === name) {
                    _mid = item
                }

            }
            if( _mid!==-1) {
                console.log(_mid);
                const teachersInLeft = state.teachersInLeft;
                let result = [];
                // console.log("11111",teachersInLeft);
                // console.log("11111",_mid)
                for(let i = 0; i<teachersInLeft.length;i++){
                    // console.log(teachersInLeft[0])
                    // console.log(teachersInLeft[i]==_mid)
                    if(teachersInLeft[i] === parseInt(_mid,10)){
                        result.push(_mid);

                    }
                }
                console.log(result)
                return{
                    ...state,
                    teachersInLeft:result
                }
            }
            return state;
        }

        default:
            return state;
    }
}