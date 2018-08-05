import { Table,Icon,Popover } from 'antd';
import React,{ Component } from 'react';
import { Link } from 'react-router'
import './Tables.css'


function color_render(text,type){
        if(type === "float"){
            if(text<0.80)return<span className="redWord">{text}</span>;
            else if(text>0.95)return<span className="orangeWord">{text}</span>;
            return <span>{text}</span>
        }
        if(type === "fraction"){
            const myArray=text.split("/")
            if(myArray[0]/myArray[1]<0.8)return<span className="redWord">{text}</span>;
            else if(myArray[0]/myArray[1]>0.95)return<span className="orangeWord">{text}</span>;
            return <span>{text}</span>
        }
}

const columns = {

    columns : [{
        title: '班级',
        dataIndex: 'classInfo.name',
        key:'classInfo.name',
        render: (text,record) => <Link  to={`/classInfo/${record.id}`}>{text}</Link>,
    }, {
        title: '课程状态',
        dataIndex: 'status',
        key:'status',
        render: text => {
                if(text === 0) return <span>已结束</span>
            return <span>进行中</span>

        }
    }, {
        title: '开课时间',
        dataIndex: 'startTime',
        key:'startTime'

    }, {
        title: '老师',
        dataIndex: 'teacherInfo.nick',
        key:'teacherInfo.nick',
        render: (text,record) => <div>{console.log("zheli",record)}<Popover placement="top"
                                               content={<div>
                                                   <div> <span>老师账号:{record.teacherInfo.nick}</span>
                                                       <span>ID:{record.teacherInfo.id}</span>
                                                       <span>微信：{record.teacherInfo.wxCode}</span>
                                                   </div>
                                                    <div><span>对应员工：{record.teacherInfo.real_name}</span>
                                                       <span>ID：{record.teacherInfo.mid}</span>
                                                       <span>微信：{record.teacherInfo.wxCode}</span>
                                                   </div>
                                               </div>} trigger="click"><Icon type="user" /> {text}
         </Popover>
        </div>
    }, {
        title: '上课率',
        dataIndex: 'enterRate',
        key:'enterRate',
        render: text => color_render(text, "fraction")

    }, {
        title: '作业提交率',
        dataIndex: 'homeworkSubmitRate',
        key:'homeworkSubmitRate',
        render: text => color_render(text, "float"),
    }, {
        title: '被点评情况',
        dataIndex: 'beCommenttedRate',
        key:'beCommenttedRate',
        render: text => color_render(text, "float"),
    }, {
        title: '打卡率',
        dataIndex: 'signRate',
        key:'signRate',
        render: text => color_render(text, "fraction"),
    }, {
        title: '满意度',
        dataIndex: 'satisfyRate',
        key:'satisfyRate',
        render: text => color_render(text, "float"),

    }]}


export default class Tables extends Component{
    render(){
        const { state } = this.props;
        // console.log("state15",state)
        return(
            <div>
                <div className="class_now">
            <div className="class_now_1">
                在学课程
            </div>
                </div>
                <Table
                    columns={columns.columns}
                    dataSource={state.lessonInfo.currentLessonsList}
                    bordered
                />
                <div className="class_now_1">
                    历史数据
                </div>
                <Table
                    columns={columns.columns}
                    dataSource={state.lessonInfo.historyLessonsList}
                    bordered
                />
            </div>

        )
    }
}