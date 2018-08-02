import { Button } from 'antd'
import React,{ Component } from 'react'
import './ButtonBox.css'
export default class ButtonBox extends Component{


    render(){
        const { back } = this.props;
        return(
            <div className="box">
                <div className="box_left">
                    <Button className="button_1">汇总</Button>
                    <Button className="button_2">摄影课</Button>
                    <Button className="button_1">绘画课</Button>

                </div>
                <span className="box_right">
                    <Button className="button_back" onClick={back}>返回</Button>
                </span>
            </div>
        )
    }
}


