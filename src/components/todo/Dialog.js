import React, { Component } from 'react';
import './todo.css'

const closeImg = require('../../img/close.png')

export default class Dialog extends Component {
    closeDiv = () => {
        const { todoActions, state } = this.props;
        todoActions.moreChance(
            null,
            !state.switchState.multipleChoice
        )
    }
    chanceDiv = (event) => {
        const { state, todoActions } = this.props;
        if (event.target.innerHTML === "置顶") {
            todoActions.topMessages(
                state.switchState.idx,
                true,
                !state.switchState.multipleChoice
            )
        } else if (event.target.innerHTML === "删除") {
            todoActions.deleteMessage(
                state.switchState.idx,
                !state.switchState.multipleChoice
            )
        } else if (event.target.innerHTML === "多选删除") {
            todoActions.deleteMoreMessages(
                state.switchState.idx,
                !state.switchState.multipleChoice,
                !state.switchState.isChecked
            )
        }
    }
    render() {
        const { state } = this.props;
        return state.switchState.multipleChoice ? (
            <div className="app-dialog">
                <img src={closeImg} alt='' onClick={this.closeDiv} />
                <ul className="content_1" onClick={this.chanceDiv}>
                    <li className="item">置顶</li>
                    <li className="item">删除</li>
                    <li className="item">多选删除</li>
                </ul>
            </div>
        ) : null;
    }
}