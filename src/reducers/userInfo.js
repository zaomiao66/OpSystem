import * as ActionTypes from '../const/ActionTypes';


//纯函数reducer 接收旧的 state 和 action，返回新的 state。
export default function userInfo(state = {  }, action){
    switch(action.type){

        case `${ActionTypes.FETCH_USERS_INFO}_SUC`:{
            const _state = action.data.data;

            return _state;
        }
        default:
            return state;
    }
}