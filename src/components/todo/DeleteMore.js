import React, { Component } from 'react';
import './todo.css';

export default class TodoList extends Component {
    closeDiv = () =>{
        const { state,todoActions } = this.props;
        todoActions.overDelete(
            !state.switchState.isChecked
        )
    }
    x = (a,b) =>{ //从大到小排序方法
        return b>a;
    }
    deleteMore = () =>{
        const { state,todoActions } = this.props;
        let newMessage = state.messageState.messages;
        let newArray = state.switchState.deleteArray.slice();
        newArray.sort(this.x);
        for(let i in newArray) {
            newMessage.splice(newArray[i],1)
        }
        todoActions.deleteItem(
            newMessage,
            !state.switchState.isChecked
        )
    }
    render() {
        const { state } = this.props;
        return state.switchState.isChecked ?(
            <div>
                <div className="chanceDelete">
                     <button onClick={this.deleteMore}>批量删除</button>
                     <button onClick={this.closeDiv}>取消</button>
                 </div>
            </div>
        ):null
    }
}

