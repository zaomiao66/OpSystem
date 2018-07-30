import React, { Component } from 'react';
import './todo.css';

export default class Filter extends Component {
    constructor() {
        super();
        this.state = {
            imgs: [
                {
                    img: require('../../img/chat.png'),
                },
                {
                    img: require('../../img/contact.png'),
                },
                {
                    img: require('../../img/find.png'),
                },
                {
                    img: require('../../img/me.png'),
                }
            ],
        }
    }
    renderImgs = () => {
        return this.state.imgs.map((item, index) => {
            return (
                <li className="footer_content" key={index}>
                    <img src={item.img} className="footer_img" alt='' />
                </li>
            )
        })
    }
    render() {
        return (
            <footer>
                <ul>
                    {this.renderImgs()}
                </ul>
            </footer>
        )
    }
} 