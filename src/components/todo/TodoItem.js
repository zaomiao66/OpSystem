import React, { Component } from 'react';
import { Button } from 'antd'
import './todo.css';

export default class TodoList extends Component {
    handleDialog = (idx) => {
        const { state, todoActions } = this.props;
        todoActions.moreChance(
            idx,
            !state.switchState.multipleChoice
        )
    }
    chanceChecked = (idx,event) =>{
        const { state,todoActions } = this.props;
        let newArray = state.switchState.deleteArray.slice();
        if(event.target.checked) {
            newArray.push(idx);
        }else{
            for(let i in newArray){
                if(newArray[i] === idx){
                    newArray.splice(i,1);
                }
            }
        }
        
        todoActions.addDeleteArray(newArray)
    }
    checkBox = (idx) =>{
        const { state } = this.props;
        return state.switchState.isChecked ? (
                <input type="checkbox" className="checkBox" 
                onClick={this.chanceChecked.bind(this,idx)}/>
        ):null
    }
    render() {
        const { item, index } = this.props;
        return (
            <div>
                {this.checkBox(index)}
                <img src={item.img} alt='' />
                <div className="textContent">
                    <p className="chatName">{item.title}</p>
                    <p className="chatCont">{item.description}</p>
                </div>
                <div className="timeRight">
                    <p className="chatTime">{item.time}</p>
                    <button className="button" onClick={this.handleDialog.bind(this, index)}>更多</button>
                </div>
            </div>
        )
    }
}

