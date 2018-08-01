import { Avatar } from 'antd'
import React,{ Component } from 'react'
import './Header.css'
import { Input } from 'antd';
import { Icon } from 'antd';
import { Button } from 'antd'
import *as ActionTypes from '../../const/ActionTypes'




export default class Header extends Component{

    render(){
        const { state } = this.props;
        // console.log("state2",state)
        return(
            <div className="header_1">
            <div className="avatar">
                <Avatar style={{height: 92 ,width: 104}} shape="square" src={ state.messageState.hurl}/>
            </div>
            <div className="infom" >
                <div className="infom_fir">{state.messageState.nick}</div>
                <div className="infor_item">
                    <span className="span">学员编号:{state.messageState.id}</span>
                    <span className="span">历史付费额：{state.messageState.history_pay}</span>
                    <span className="span_fu">手机号码：</span>
                    <span className="input_size">
                           {/*// defaultValue={state.messageState.tel}*/}
                           {/*// onChange={this.changeWeixin}*/}{state.messageState.tel}
                   </span>
                    <Icon className="img_size_xiugai"  type="file" />
                    {/*onClick={this.handelPhone}*/}
                </div>
                <div className="infor_item">
                    <span className="span">在线课程：{state.messageState.learningLesson}</span>
                    <span className="span">累计登录天数：{state.messageState.totalLearningDays}</span>
                    <span className="span_fu">微信号码:</span>
                    <Input className="input_size"
                           // addonAfter={<Icon type="file" onClick={this.handelWeixin} />}

                           defaultValue={state.messageState.weiChatCode}
                    />
                    <Button  className="button">提交</Button>
                    {/*onClick={this.handelWeixin}*/}
                </div>
                <div className="infor_item">
                    <span className="span">入学时间：{state.messageState.enterDate}</span>
                    <span className="span">最后登录时间：{state.messageState.lastLoginDate}</span>
                    <span className="span_fu">备注：</span>
                    <Input className="input_size"
                           defaultValue={state.messageState.remark}

                           type='text'/>
                    <Button  className="button">提交</Button>
                    {/*onClick={this.handelRemark()}*/}
                </div>
            </div>
            </div>
        )
    }
}