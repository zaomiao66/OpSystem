import React, { Component } from 'react'
import DeleteMore from './DeleteMore'
import TodoItem from './TodoItem'
import './todo.css'

export default class TodoList extends Component {
    render() {
        const { state, todoActions } = this.props;
        let active = 'active';
        return (
            <div className="container">
                <div className="content" >
                    <ul id="content">
                        {
                            state.messageState.messages.map((item, index) => {
                                if (item.isTop) {
                                    return (
                                        <li className={'eve_content ' + active} key={index} >
                                            <TodoItem item={item} index={index}
                                                todoActions={todoActions} state={state} />
                                        </li>
                                    )
                                } else {
                                    return (
                                        <li className="eve_content" key={index}>
                                            <TodoItem item={item} index={index}
                                                todoActions={todoActions} state={state} />
                                        </li>
                                    )
                                }

                            })
                        }
                    </ul>
                    <DeleteMore state={state} todoActions={todoActions}/>
                </div>
            </div>
        )
    }
}

