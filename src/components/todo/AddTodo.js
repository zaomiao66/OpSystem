import React, { Component } from 'react';
import './todo.css'

const searchImg = require('../../img/red_add.png')
const KEY_CODE = 13;

export default class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            overreturn: false,
        }
    }
    renderClick = () => {
        this.setState({
            overreturn: !this.state.overreturn,
        })
    }
    handerAdd = () => {
        const { todoActions } = this.props;
        if (!this.refs.myInput.value || !this.refs.myInput1.value || !this.refs.myInput2.value) {
            this.setState({
                overreturn: !this.state.overreturn,
            })
        } else {
            this.setState({
                overreturn: !this.state.overreturn,
            })
            const newObject = {
                img: require('../../img/people.jpg'),
                title: this.refs.myInput.value,
                description: this.refs.myInput1.value,
                time: this.refs.myInput2.value,
                isTop: false,
            }
            todoActions.addMess(newObject)
        }
    }
    keySubmit = e => {
        if (e.keyCode === KEY_CODE)
            this.handerAdd();
    }
    render() {
        return (
            <div className="todo_ctn">
                <div className="header">
                    <h3>微信</h3>
                    <div className="list">
                        <img src={searchImg} onClick={this.renderClick} alt='' />
                    </div>
                </div>
                {
                    this.state.overreturn ? (
                        <div>
                            <ul className="content_2" >
                                <li className="item">名称:<input className="app-input" ref="myInput"></input></li>
                                <li className="item">内容:<input className="app-input" ref="myInput1"></input></li>
                                <li className="item">时间:<input className="app-input" ref="myInput2" onKeyDown={this.keySubmit}></input></li>
                                <li className="item" onClick={this.handerAdd} >添加</li>
                            </ul>
                        </div>
                    ) : null
                }
            </div>
        )
    }
} 