import axios from 'axios';
import * as ActionTypes from '../const/ActionTypes';


export function fetchUsersInfo(next) {
    next({
        type:`${ActionTypes.FETCH_USERS_INFO}_REQ`
    });
    axios({
    method:'POST',
    url:'http://xly-wkop.xiaoniangao.cn/getUserInfo',
    data:{'mid':'MID330900002'},
    headers:{'Content-Type':'application/x-www-form-urlencoded'}
    }).then(res =>{
        console.log("res",res);
        next({
            type:`${ActionTypes.FETCH_USERS_INFO}_SUC`,
            data:res.data.data,
        });
        // console.log("data",this.state)
    }).catch(err => {
        console.log("err",err);
        next({
            type:`${ActionTypes.FETCH_USERS_INFO}_FAI`
        });
    })
}


export function fetchLessonInfo(next) {
    next({
        type:`${ActionTypes.FETCH_LESSON_INFO}_REQ`
    });
    axios({
        method:'POST',
        url:'http://xly-wkop.xiaoniangao.cn/getLessonInfo',
        data:{'mid':'MID330900002'},
        headers:{'Content-Type':'application/x-www-form-urlencoded'}
    }).then(res =>{
        console.log("res11",res);
        next({
            type:`${ActionTypes.FETCH_LESSON_INFO}_SUC`,
            data:res.data.data,
        });
        // console.log("lesson",this.state)
    }).catch(err => {
        console.log("err11",err);
        next({
            type:`${ActionTypes.FETCH_LESSON_INFO}_FAI`
        });
    })
}