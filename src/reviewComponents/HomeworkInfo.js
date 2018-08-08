import React,{ Component } from 'react'
import './HomeworkInfo.css'
import toux from '../img/toux.jpg'
import {Switch} from 'antd';
import { Input } from 'antd';

const Search = Input.Search;



export default class HomeworkInfo extends Component{


    render(){
        // console.log(this.props)
        const { homework,Actions } = this.props
        return(<div>
            <div className="info">
                <span className="left"><span>NO.{homework.id}</span><img className="img" src={toux}/></span>
                <span className="mid">
                    <span className="mid_top"> 作业：{ homework.description }</span>
                    <span className="mid_bottom">
                        <span>{homework.author.nick}</span>
                        <span style={{marginLeft:10}}>mid:{homework.author.mid}</span>
                        <span style={{marginLeft:10}}>{homework.classInfo.name}</span>
                        <span style={{marginLeft:10}}>点评人:{homework.teacherInfo.nick}</span>
                        <span style={{marginLeft:10}}>提交时间:{homework.time}</span>
                        </span>
                </span>
                <span className="right"> 佳作<Switch
                    onChange={() => {Actions.toggleExcellent(homework.id)}}
                    defaultChecked={homework.isExcellent} /></span>


            </div>
                <Search
                    placeholder="input text"
                    enterButton="提交"
                    size="large"
                    onSearch={value => Actions.inputNewComment(homework.id,value)}
                />
            </div>
        )
    }

}