import { Button } from 'antd'
import React,{ Component } from 'react'
import './ButtonBox.css'
export default class ButtonBox extends Component{
    render(){
        return(
            <div className="box">
                <div className="box_left">
                    <Button className="button_1">汇总</Button>
                    <Button className="button_2">摄影课</Button>
                    <Button className="button_1">绘画课</Button>

                </div>
                <div className="box_right">
                    <Button className="button_back">返回</Button>
                </div>
            </div>
        )
    }
}


