import { Table } from 'antd';
import React,{ Component } from 'react'
import './Tables.css'

// const columns = [{
//     title: '班级',
//     dataIndex: 'learningClass',
//     key:'learningClass',
//     render: text => <a href="javascript:;">{text}</a>,
// }, {
//     title: '课程状态',
//     dataIndex: 'status',
//     key:'status'
// }, {
//     title: '开课时间',
//     dataIndex: 'time',
//     key:'time'
//
// }, {
//     title: '老师',
//     dataIndex: 'teacher',
//     key:'teacher'
// }, {
//     title: '上课率',
//     dataIndex: 'class_rate',
//     key:'class_rate'
//
// }, {
//     title: '作业提交率',
//     dataIndex: 'homework_rate',
//     key:'homework_rate'
// }, {
//     title: '被点评情况',
//     dataIndex: 'comment_rate',
//     key:'comment_rate'
//
// }, {
//     title: '打卡率',
//     dataIndex: 'card_rate',
//     key:'card_rate'
// }, {
//     title: '满意度',
//     dataIndex: 'satisfaction_rate',
//     key:'satisfaction_rate'
//
// }];
//
// const dataHistory = [{
//     key: '1',
//     learningClass: '高级班',
//     status: '已结束',
//     time: '2017-04-30',
//     teacher:'小白老师',
//     class_rate:'21/21',
//     homework_rate:'80%',
//     comment_rate:'100%',
//     card_rate:'5/21',
//     satisfaction_rate:'90%'
// }]


// const dataNow = [{
//     key: '1',
//     learningClass: '高级班',
//     status: '进行中',
//     time: '2017-04-20',
//     teacher:'小白老师',
//     class_rate:'3/21',
//     homework_rate:'67.98%',
//     comment_rate:'87.98%',
//     card_rate:'3/21',
//     satisfaction_rate:'90.14%'
// }, {
//     key: '2',
//     learningClass: '进阶班',
//     status: '进行中',
//     time: '2017-04-21',
//     teacher:'小白老师',
//     class_rate:'5/21',
//     homework_rate:'76.89%',
//     comment_rate:'31.87%',
//     card_rate:'5/21',
//     satisfaction_rate:'98.14%'
// },{
//     key: '3',
//     learningClass: '提高班',
//     status: '进行中',
//     time: '2017-04-22',
//     teacher:'小白老师',
//     class_rate:'13/21',
//     homework_rate:'13.89%',
//     comment_rate:'21.76%',
//     card_rate:'13/21',
//     satisfaction_rate:'88.01%'
// },{
//     key: '4',
//     learningClass: '入门班',
//     status: '进行中',
//     time: '2017-04-22',
//     teacher:'小白老师',
//     class_rate:'20/21',
//     homework_rate:'98.45%',
//     comment_rate:'98.67%',
//     card_rate:'20/21',
//     satisfaction_rate:'30.10%'
// },{
//     key: '5',
//     learningClass: '体验班',
//     status: '已结束',
//     time: '2017-04-24',
//     teacher:'小白老师',
//     class_rate:'21/21',
//     homework_rate:'31.54%',
//     comment_rate:'78.76%',
//     card_rate:'21/21',
//     satisfaction_rate:'94.10%'
// },];



export default class Tables extends Component{
    render(){
        const { state } = this.props;
        console.log("state1",state)
        return(
            <div>
                <div className="class_now">
            <div className="class_now_1">
                在学课程
            </div>
                </div>
                <Table
                    columns={state.switchState.columns}
                    dataSource={state.switchState.dataNow}
                    bordered
                    // title={() => 'Header'}
                    // footer={() => 'Footer'}
                />
                <div className="class_now_1">
                    历史数据
                </div>
                <Table
                    columns={state.switchState.columns}
                    dataSource={state.switchState.dataHistory}
                    bordered
                />
            </div>

        )
    }
}