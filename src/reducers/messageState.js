import * as actionTypes from "../const/ActionTypes";

const initState = {

                name:'快乐水！',
                id:'MID6666666666',
                history_con:'666',
                tel:'16666666666',
                classes:'摄影课 绘画课',
                days:'666天',
                weChat:' ',
                admission_time:'2016-06-06',
                lastSignTime:'2016-06-06',
                beizhu:''

};

export default function todoList(state = initState, action) {
    switch (action.type) {
        case actionTypes.ADD_MESSAGE: { //检测只有置顶然后添加时的判断操作
            const newMessage = state.messages.slice();
            const newList = { ...state };
            let temp = null;
            let n = 0;
            for (n = 0;n < newMessage.length;n ++) {
                if (!newMessage[n].isTop) {
                    temp = n;
                    break;
                }
            }
            if(n === newMessage.length){
                newMessage.push(action.item)
                newList.messages = newMessage;
            }else{
                const topArray = newMessage.splice(0, temp);
                topArray.push(action.item)
                const newMess = topArray.concat(newMessage);
                newList.messages = newMess;
            }
            return newList;
        }
        case actionTypes.DELETE_MESSAGE: { //删除某一行元素
            const copeState = { ...state };
            const copeMessages = state.messages.slice();
            const { idx } = action;
            copeMessages.splice(idx, 1);
            copeState.messages = copeMessages;
            return copeState;
        }
        case actionTypes.TOP_MESSAGE: { //置顶某一行元素，将自带的isTop置为true
            const idx = action.idx;
            const _state = { ...state };
            const _message = state.messages.slice();
            _message[idx].isTop = action.isTop;
            const temp = _message[idx];
            _message.splice(idx, 1);
            _message.unshift(temp);
            _state.messages = _message;
            return _state;
        }
        case actionTypes.DELETE_ITEM: { //批量删除
            const newState = {...state};
            let newMessages = state.messages;
            newMessages = action.item;
            newState.messages = newMessages;
            return newState;
        }
        default:
            return state;
    }
}
