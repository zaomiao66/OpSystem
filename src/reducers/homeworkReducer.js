import * as ActionTypes from '../const/ActionTypes'
import { combineReducers } from 'redux'

const initState = {
    myHomeworkNotReviewed:[],
    myHomeworkBeReviewed:[],
    allHomeworkNotReviewed:[],
    allHomeworkBeReviewed:[],
    comments:{},
    author:{},
    homework:{}

};

function homeworkEntities(state = initState, action) {
    switch (action.type) {
        case `${ActionTypes.GET_HOME_WORK}_SUC`:

        case `${ActionTypes.GET_HOME_WORK_HAS_REVIEWED}_SUC`:

        case `${ActionTypes.GET_ALL_HOME_WORK}_SUC`:

        case `${ActionTypes.GET_ALL_HOME_WORK_HAS_REVIEWED}_SUC`:

            const newState = {...state};
            switch (action.type) {
                case `${ActionTypes.GET_HOME_WORK}_SUC`: {
                   newState.myHomeworkNotReviewed = action.data.result;
                   break;
                }
                case `${ActionTypes.GET_HOME_WORK_HAS_REVIEWED}_SUC`:{
                  newState.myHomeworkBeReviewed = action.data.result;
                  break;
                }
                case `${ActionTypes.GET_ALL_HOME_WORK}_SUC`:{
                    newState.allHomeworkNotReviewed = action.data.result;
                    break;
                }
                case `${ActionTypes.GET_ALL_HOME_WORK_HAS_REVIEWED}_SUC`:{
                    newState.allHomeworkBeReviewed = action.data.result;
                    break;
                    }
                default:
                    return state;
            }
            newState.author = {...state.author, ...action.data.entities.author};
            newState.comments = { ...state.comments, ...action.data.entities.commentsItem };
            newState.homework = { ...state.homework, ...action.data.entities.homeworkIds }
            return newState;
        case ActionTypes.RETURN_COMMENT:{
            const { params } = action;
            const{ id,reason,status } = params;
            const newState = { ...state };
            // console.log("newState",state);
            newState.comments[id].reason = reason;
            newState.comments[id].status = status;
            return newState
        }
        case ActionTypes.INPUT_NEW_COMMENT:{
            const { homework,comments } = state;
            const newState = { ...state };
            const { id,content } = action;
            homework[id].comments.push(homework[id].comments[homework[id].comments.length-1]+1)
            // console.log(homework[id]);
            const newComment = {
                content:content,
                from:"teacher",
                id:homework[id].comments[homework[id].comments.length-1],
                status:"unrevised",
                nick:homework[id].teacherInfo.nick,
                time:new Date().getTime()
            };
            const idx = homework[id].comments[homework[id].comments.length-1];
            newState.comments = { ...state.comments,[idx]:newComment };
            // console.log("newState",newComment)
            // console.log("newState2",newState.comments)
            return newState;
        }
        case ActionTypes.TOGGLE_EXCELLENT:{
            const { id } = action;
            const newState = { ...state };
            // console.log("newState.homework[id]",id)
            newState.homework[id].isExcellent = !newState.homework[id].isExcellent;

            if(newState.homework[id].isExcellent) console.log("这是佳作呢");
            else console.log("才不是佳作呢")
            return newState;
        }
        default:
            return state;
    }
}

// function author(state = initState, action) {
//     switch (action.type) {
//         case `${ActionTypes.GET_HOME_WORK}_SUC`:{
//             // console.log("3333333",action)
//             const data = action.data.entities;
//             return{
//                 ...state.author,
//                 ...data.author
//             }
//         }
//         default:
//             return state;
//     }
// }
//
// function comments(state = initState, action) {
//     switch (action.type) {
//         case `${ActionTypes.GET_HOME_WORK}_SUC`:{
//             console.log("3333333",action)
//             const data = action.data.entities;
//             return{
//                 ...state.comments,
//                 ...data.commentsItem
//             }
//         }
//         // case ActionTypes.RETURN_COMMENT:{
//         //     const { params } = action;
//         //     const{ id,reason,status } = params;
//         //     const newState = { ...state.comments };
//         //     newState[id].reason = reason;
//         //     newState[id].status = status;
//         //     return newState
//         // }
//         default:
//             return state;
//     }
// }
//
// function homework(state = initState, action) {
//     switch (action.type) {
//         case `${ActionTypes.GET_HOME_WORK}_SUC`:{
//             // console.log("3333333",action)
//             const data = action.data.entities;
//             return{
//                 ...state.homework,
//                 ...data.homeworkIds
//             }
//         }
//         default:
//             return state;
//     }
// }



export default combineReducers({
    homeworkEntities
    // author,
    // comments,
    // homework
});
