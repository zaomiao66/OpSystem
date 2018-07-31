import * as ActionTypes from '../const/ActionTypes';
const initState = {

        nick: '快乐水！',
        id: 'MID6330900002',
        history_pay: '666',
        tel: '16666666666',
        learningLesson: ["摄影课","绘画课"],
        totalLearningDays: '666天',
        weiChatCode: 'zaomiao66 ',
        enterDate: '2016-06-06',
        lastLoginDate: '2016-06-06',
        remark: '输入备注',
        hurl:'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'


};

//纯函数reducer 接收旧的 state 和 action，返回新的 state。
export default function menu(state = initState,action){
    switch(action.type){

        case `${ActionTypes.FETCH_USERS_INFO}_SUC`:{
            const _state=action.data;

            return _state;
        }
        default:
            return state;
    }
}