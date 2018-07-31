import { Table } from 'antd';
import React,{ Component } from 'react'
import './Tables.css'

const columns = {

    columns : [{
        title: '班级',
        dataIndex: 'classInfo.name',
        key:'classInfo.name',
        // render: text => <a href="javascript:;">{text}</a>,
    }, {
        title: '课程状态',
        dataIndex: 'status',
        key:'status',
        render: text => {
                if(text === 0) return <span>已结束</span>
            return <a>进行中</a>

        }
    }, {
        title: '开课时间',
        dataIndex: 'startTime',
        key:'startTime'

    }, {
        title: '老师',
        dataIndex: 'teacherInfo.nick',
        key:'teacherInfo.nick'
    }, {
        title: '上课率',
        dataIndex: 'enterRate',
        key:'enterRate',
        render: text => {
            let myArray=new Array()
            myArray = text.split("/")
            console.log("x",myArray)
            if(myArray[0]/myArray[1]<0.8)return<a className="redWord">{text}</a>;
            else if(myArray[0]/myArray[1]>0.95)return<a className="orangeWord">{text}</a>;
            return <div>{text}</div>
        },

    }, {
        title: '作业提交率',
        dataIndex: 'homeworkSubmitRate',
        key:'homeworkSubmitRate',
        render: text => {
            console.log(parseFloat(text))
            if(parseFloat(text)<0.80)return<a className="redWord">{text}</a>;
            else if(parseFloat(text)>0.95)return<a className="orangeWord">{text}</a>;
            return <div>{text}</div>
        },
    }, {
        title: '被点评情况',
        dataIndex: 'beCommenttedRate',
        key:'beCommenttedRate',
        render: text => {
            console.log(parseFloat(text))
            if(parseFloat(text)<0.80)return<a className="redWord">{text}</a>;
            else if(parseFloat(text)>0.95)return<a className="orangeWord">{text}</a>;
            return <div>{text}</div>
        },
    }, {
        title: '打卡率',
        dataIndex: 'signRate',
        key:'signRate',
        render: text => {
            console.log(parseFloat(text))
            if(parseFloat(text)<0.80)return<a className="redWord">{text}</a>;
            else if(parseFloat(text)>0.95)return<a className="orangeWord">{text}</a>;
            return <div>{text}</div>
        },
    }, {
        title: '满意度',
        dataIndex: 'satisfyRate',
        key:'satisfyRate',
        render: text => {
            console.log(parseFloat(text))
            if(parseFloat(text)<0.80)return<a className="redWord">{text}</a>;
            else if(parseFloat(text)>0.95)return<a className="orangeWord">{text}</a>;
            return <div>{text}</div>
        },

    }]}


export default class Tables extends Component{
    render(){
        const { state } = this.props;
        console.log("state15",state)
        return(
            <div>
                <div className="class_now">
            <div className="class_now_1">
                在学课程
            </div>
                </div>
                <Table
                    columns={columns.columns}
                    dataSource={state.switchState.currentLessonsList}
                    bordered
                />
                <div className="class_now_1">
                    历史数据
                </div>
                <Table
                    columns={columns.columns}
                    dataSource={state.switchState.historyLessonsList}
                    bordered
                />
            </div>

        )
    }
}