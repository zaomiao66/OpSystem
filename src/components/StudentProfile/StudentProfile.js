import { Button,Input,Table } from 'antd'
import React,{ Component } from 'react'
import { Link } from 'react-router'
import './StudentProfile.css'
// import {midSearch} from  '../../actions'

const Search = Input.Search;

const columns = {

    columns : [{
        title: ' ',
        dataIndex: 'hurl',
        key:'hurl',
        render: text => <img className="pic" src={ text}/>,
    }, {
        title: '学员名',
        dataIndex: 'nick',
        key:'nick',
        render: text => <Link  to="/Op">{text}</Link>
    }, {
        title: '学员编号/MID',
        dataIndex: 'mid',
        key:'mid'

    }, {
        title: '入学时间',
        dataIndex: 'enter_time',
        key:'enter_time'
    }, {
        title: '开课时间',
        dataIndex: 'start_time',
        key:'start_time',

    }, {
        title: '在学课程',
        dataIndex: 'learning_lessons',
        key:'learning_lessons',
    }, {
        title: '负责老师',
        dataIndex: 'teachers',
        key:'teachers',
    }]}

// function isRealSearch(value) {
//      if(data == "" || data == undefined || data == null) return -1;
//      return value;
// }



export default class StudentProfile extends Component{

    filterTable=()=>{
        const { state } = this.props;
        console.log("SSTATE",state.studentList)
        console.log("SSTATE2",state.studentList.studentList)
        if(!state.studentList.isSeached){
            return <Table
                columns={columns.columns}
                dataSource={state.studentList.studentList}

            />
        }else{
            return <Table
                columns={columns.columns}
                dataSource={state.studentList.filterList}

            />
        }
    }


    render(){
        const { state } = this.props;
        // const { actions } = this.props;
        console.log("state.studentList21212",state)
        return(
            <div>
            <div className="box">
                <div className="box_left">
                    <Button className="button_1">汇总</Button>
                    <Button className="button_2">摄影课</Button>
                    <Button className="button_1">绘画课</Button>

                </div>
                <div className="box_right">
                    <Search
                        placeholder="input search text"
                        onSearch={value => this.props.actions.midSearch(value)}
                        style={{ width: 200 }}
                    />
                </div>
            </div>
                <div> {
                        this.filterTable()
                } </div>
            </div>
        )
    }
}