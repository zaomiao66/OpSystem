// import {EDITPHONE} from "../const/ActionTypes";
// import {EDITREMARK} from "../const/ActionTypes";
// import {EDITWEIXIN} from "../const/ActionTypes";
// import serverApi from "../middleware/serverApi";
import * as ActionTypes from "../const/ActionTypes"
import {MID_INPUT} from "../const/ActionTypes";
import {MID_SEARCH} from "../const/ActionTypes";
import { normalize } from 'normalizr'
import * as schemes from '../schema/index'
import  * as schemesHomework from '../schema/homework'



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
            normailzerFun:response=> {
                return normalize(response.data, schemes.STUDENTLIST)
            }

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
    const  mid= params;
    return {
        type: ActionTypes.CHANGE_REPLY_STATUS,
        params: mid
    }
}

function getHomeWork(token,isReviewed) {
    return{
        SERVER_API:{
            type:ActionTypes.GET_HOME_WORK,
            endpoint:'/getHomeWork',
            params:{
                token,
                isReviewed
            },
            normailzerFun:response=> {
                const tem = normalize(response.data, schemesHomework.HOMEWORK);
                console.log("tem",tem)
                return tem
            }
        }
    }
}
function getAllHomeWork(token,isReviewed) {
    return{
        SERVER_API:{
            type:ActionTypes.GET_ALL_HOME_WORK,
            endpoint:'/getHomeWork',
            params:{
                token,
                isReviewed
            },
            normailzerFun:response=> {
                const tem = normalize(response.data, schemesHomework.HOMEWORK);
                // console.log("tem",tem)
                return tem
            }
        }
    }
}
function getAllHomeWorkHasReviewed(token,isReviewed) {
    return{
        SERVER_API:{
            type:ActionTypes.GET_ALL_HOME_WORK_HAS_REVIEWED,
            endpoint:'/getHomeWork',
            params:{
                token,
                isReviewed
            },
            normailzerFun:response=> {
                const tem = normalize(response.data, schemesHomework.HOMEWORK);
                // console.log("tem",tem)
                return tem
            }
        }
    }
}

function getHomeWorkHasReviewed(token,isReviewed) {
    return{
        SERVER_API:{
            type:ActionTypes.GET_HOME_WORK_HAS_REVIEWED,
            endpoint:'/getHomeWork',
            params:{
                token,
                isReviewed
            },
            normailzerFun:response=> {
                const tem = normalize(response.data, schemesHomework.HOMEWORK);
                // console.log("tem",tem)
                return tem
            }
        }
    }
}

function returnComment(id) {//退回评论
    return{
        type:ActionTypes.RETURN_COMMENT,
        params:{
            id: id,
            reason:"点评的太简单了",
            status:"reject"
        }

    }
}

function inputNewComment(id,content) {//增加新的评论

    return{
            type:ActionTypes.INPUT_NEW_COMMENT,

                id,
                content

        }
}

function toggleExcellent(id) {//更改佳作
    return {
        type:ActionTypes.TOGGLE_EXCELLENT,
        id
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
    getHomeWork,
    getHomeWorkHasReviewed,
    getAllHomeWork,
    getAllHomeWorkHasReviewed,
    returnComment,
    inputNewComment,
    toggleExcellent
}