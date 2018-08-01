import axios from 'axios'
import * as ActionTypes from "../const/ActionTypes";

const API_DOMAIN = 'http://xly-wkop.xiaoniangao.cn';

const callServerApi = (endpoint, params) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: API_DOMAIN + endpoint,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: params
        }).then(res => {
            if (res.data.ret === 1) {
                return resolve(res);
            }
            return reject({ errMsg: res.data.errMsg });
        }).catch(err => {
            return reject({ errMsg: JSON.stringify(err) });
        });
    });
};

export default store => next => action => {
    if (!action.SERVER_API) {
        return next(action);
    }
    const {
        type,
        endpoint,
        params
    } = action.SERVER_API;
    if (typeof type !== 'string') {
        throw new Error('type should be a string');
    }
    if (typeof endpoint !== 'string') {
        throw new Error('endpoint should be a string');
    }
    // if (typeof params !== 'object') {
    //     throw new Error('params should be a object');
    // }
    next({
        type: `${type}_REQ`
    });
    return callServerApi(endpoint, params)
        .then(res => {
            next({
                type: `${type}_SUC`,
                data:res.data.data,
            });
        }).catch(err => {
            next({
                type: `${type}_FAI`,
                errMsg: err.errMsg
            });
        });
};

// export default function (store) {  和这种形式是一样的
//     return function (next) {
//         return function (action) {
//
//         }
//     }
// }