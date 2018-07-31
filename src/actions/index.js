import * as actionTypes from "../const/ActionTypes";
import {EDITPHONE} from "../const/ActionTypes";
import {EDITREMARK} from "../const/ActionTypes";
import {EDITWEIXIN} from "../const/ActionTypes";

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
    editPhone,
    editRemark,
    editWeixin
}