import { Avatar } from 'antd'
import React,{ Component } from 'react'
import './Header.css'
import { Input } from 'antd';
import { Icon } from 'antd';
import { Button } from 'antd'



export default class Header extends Component{

    render(){
        const { state } = this.props;
        console.log("state2",state)
        return(
            <div className="header_1">
            <div className="avatar">
                <Avatar style={{height: 92 ,width: 104}} shape="square" src={ require('../../img/toux.jpg')}/>
            </div>
            <div className="infom" >
                <div className="infom_fir">{state.messageState.name}</div>
                <div className="infor_item">
                    <span className="span">学员编号:{state.messageState.id}</span>
                    <span className="span">历史付费额：{state.messageState.history_con}</span>
                    <span className="span_fu">手机号码：</span>
                    <span style={{fontWeight:700}}>{state.messageState.tel}</span>
                    <Icon className="img_size_xiugai" type="file" />
                </div>
                <div className="infor_item">
                    <span className="span">在线课程：{state.messageState.classes}</span>
                    <span className="span">累计登录天数：{state.messageState.days}</span>
                    <span className="span_fu">微信号码:</span>
                    <Input className="input_size"></Input>
                    <Button  className="button">提交</Button>
                </div>
                <div className="infor_item">
                    <span className="span">入学时间：{state.messageState.admission_time}</span>
                    <span className="span">最后登录时间：{state.messageState.lastSignTime}</span>
                    <span className="span_fu">备注：</span>
                    <Input className="input_size"></Input>
                    <Button  className="button">提交</Button>
                </div>
            </div>
            </div>
        )
    }
}