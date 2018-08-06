// import {EDITPHONE} from "../const/ActionTypes";
// import {EDITREMARK} from "../const/ActionTypes";
// import {EDITWEIXIN} from "../const/ActionTypes";
// import serverApi from "../middleware/serverApi";
import * as ActionTypes from "../const/ActionTypes"
import {MID_INPUT} from "../const/ActionTypes";
import {MID_SEARCH} from "../const/ActionTypes";
import { normalize } from 'normalizr'
import * as schemes from '../schema/index'



 function fetchUsersInfo(mid){
    return{
        SERVER_API:{
        type:ActionTypes.FETCH_USERS_INFO,
        endpoint:'/getUserInfo',
        params:{
            mid
        }

        }
    }
}


 function fetchLessonInfo(mid){
    return{
        SERVER_API:{
            type:ActionTypes.FETCH_LESSON_INFO,
            endpoint:'/getLessonInfo',
            params:{
                mid
            },
            normailzerFun:response=> {
                console.log("xxxx",response)
                return {
                    current: normalize(response.data.currentLessonsList, schemes.LESSONLIST),
                    history: normalize(response.data.historyLessonsList, schemes.LESSONLIST)
                }
            }
        }
    }
}
function getStudentList(){
    return{
        SERVER_API:{
            type:ActionTypes.GET_STUDENT_LIST,
            endpoint:'/getStudentList',
            // params:{
            //     mid:'11'
            // }

        }
    }
}

function getClassInfo(id){
    return{
        SERVER_API:{
            type:ActionTypes.GET_CLASS_INFO,
            endpoint:'/getClassInfo',
            params:{
                id
            },

        }
    }
}

function getSatisfiledList(mid){
    return{
        SERVER_API:{
            type:ActionTypes.GET_SATISFILED_LIST,
            endpoint:'/getSatisfiledList',
            params:{
                mid
            },
            normailzerFun:response=> {
                return normalize(response.data.list, schemes.SATISFILEDLIST)
            }
        }
    }
}

function midSearch(value) {
    return{
        type:MID_SEARCH,
        value:value,
    }
}

function changReplyStatus(params){
    const { mid, time, lessonIndex } = params
    return {
        type: ActionTypes.CHANGE_REPLY_STATUS,
        params: { mid, lessonIndex, time }
    }
}

export {
    fetchUsersInfo,
    fetchLessonInfo,
    getStudentList,
    getClassInfo,
    midSearch,
    getSatisfiledList,
    changReplyStatus,
}