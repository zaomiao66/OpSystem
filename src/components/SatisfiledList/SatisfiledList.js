import { Button,Input,Table,Icon,Popover } from 'antd'
import React,{ Component } from 'react'


function color_render(text) {

    if (text < 5) return <span className="redWord">{text}</span>;
    else return <span>{text}</span>;

}

let display1 = 'inline-block';
let display2 = 'none';

function changeText(){
    document.getElementById('boldStuff').innerHTML = '已回复';
}

function click_render(text){

    display1 = 'inline-block';
    display2 = 'none';
    if(text===1){
        display1 = 'none';
        display2 = 'inline';
    }
    {/*<Icon  style= {{display:display1}} type="mail" />*/}
        return<div  ><span id='boldStuff' onClick = {changeText} style= {{display:display1}} >待回复</span>
        <span  style= {{display:display2}}>已回复</span></div>;

    // onClick={display1 = 'none'}
}

const columns = {

    columns : [{
        title: '教程',
        dataIndex: 'course_name',
        key:'course_name',
    },  {
        title: '开课时间',
        dataIndex: 'time',
        key:'time'

    }, {
        title: '老师',
        dataIndex: 'teacher_info.nick',
        key:'teacher_info.nick',
        render: (text,record) => <div><Popover placement="top"
                            content={<div>
                                <div> <span>老师账号:{record.teacher_info.nick}</span>
                                        <span>ID:{record.teacher_info.id}</span>
                                        <span>微信：{record.teacher_info.wx_code}</span>
                                </div>
                                <div><span>对应员工：{record.teacher_info.real_name}</span>
                                    <span>ID：{record.teacher_info.mid}</span>
                                    <span>微信：{record.teacher_info.wx_code}</span>
                                </div>
                            </div>} trigger="click"><Icon type="user" /> {text}
        </Popover>
        </div>
    }, {
        title: '满意度评分',
        dataIndex: 'satisfied_score',
        key:'satisfied_score',
        render: text => color_render(text)

    }, {
        title: '具体反馈',
        dataIndex: 'satisfied_detail',
        key:'satisfied_detail',

    }, {
        title: '操作',
        dataIndex: 'reply_status',
        key:'reply_status',
        render: text => click_render(text)
        // render: text => {
        //     if(text === 0){display1='inline';display2 = 'none'}
        //     return <div><Icon style= {{display:'none'}} type="mail" /><span>待回复</span>
        //                  <span>已回复</span></div>
        //
        // }
    }]}

export default class SatisfiledList extends Component{
    render(){
        const { state } = this.props;
        // console.log("state15",this.props)
        return(
            <div>

                <Table
                    columns={columns.columns}
                    dataSource={state.satisfiledList.list}
                    bordered
                />

            </div>

        )
    }
}