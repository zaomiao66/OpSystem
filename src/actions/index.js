import * as actionTypes from "../const/ActionTypes";
import {EDITPHONE} from "../const/ActionTypes";
import {EDITREMARK} from "../const/ActionTypes";
import {EDITWEIXIN} from "../const/ActionTypes";
// import serverApi from "../middleware/serverApi";
import * as ActionTypes from "../const/ActionTypes"
import {MID_INPUT} from "../const/ActionTypes";
import {MID_SEARCH} from "../const/ActionTypes";



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
            }

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
function openModal() {
    return{
        type:ActionTypes.OPEN_MODAL,
        isOpen:true
    }
}

function closeModal() {
    return{
        type:ActionTypes.CLOSE_MODAL,
        isOpen:false
    }
}

function editPhone(data) {
    return{
        type:EDITPHONE,
        data
    }
}

function editRemark(data) {
    return{
        type:EDITREMARK,
        data
    }
}

function editWeixin(data) {
    return{
        type:EDITWEIXIN,
        data
    }
}

export {
    fetchUsersInfo,
    fetchLessonInfo,
    getStudentList,
    getClassInfo,
    midSearch,
    getSatisfiledList,
    openModal,
    closeModal
}