import * as actionTypes from "../const/ActionTypes";

function AddTodoCreator(text) {
    return {
        type: actionTypes.ADD_TODO,
        text
    }
}
function moreChance(idx, multipleChoice) {
    return {
        type: actionTypes.MORE_CHANCE,
        idx,
        multipleChoice        
    }
}
function addMess(item) {
    return {
        type: actionTypes.ADD_MESSAGE,
        item
    }
}
function deleteMessage(idx, multipleChoice) {
    return {
        type: actionTypes.DELETE_MESSAGE,
        idx,
        multipleChoice
    }
}
function topMessages(idx, isTop, multipleChoice) {
    return {
        type: actionTypes.TOP_MESSAGE,
        idx,
        isTop,
        multipleChoice
    }
}
function deleteMoreMessages(idx,multipleChoice,checked) {
    return {
        type:actionTypes.DELETE_MORE_MESSAGES,
        idx,
        multipleChoice,
        checked
    }
}
function overDelete(item) {
    return {
        type:actionTypes.OVER_DELETE,
        item
    }
}
function addDeleteArray(item) {
    return {
        type:actionTypes.ADD_DELETE_ARRAY,
        item
    }
}
function deleteItem(item,isChecked) {
    return {
        type:actionTypes.DELETE_ITEM,
        item,
        isChecked
    }
}

export {
    AddTodoCreator,
    moreChance,
    addMess,
    deleteMessage,
    topMessages,
    deleteMoreMessages,
    overDelete,
    addDeleteArray,
    deleteItem
}