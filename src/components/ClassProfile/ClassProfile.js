import { Icon, Table } from 'antd';
import React, { Component } from 'react';
import './ClassProfile.css';

function mark_render(text) {
  if (text === 0) return <Icon style={{ fontSize: 20, fontWeight: 800 }} type="close" />;
  else if (text === 1) return <Icon style={{ fontSize: 20, color: 'red', fontWeight: 800 }} type="check" />;
  return <Icon style={{ fontSize: 20, fontWeight: 800 }} type="minus" />;
}
function color_render(text) {
  if (text < 5) return <span className="redWord">{text}</span>;
  return <span>{text}</span>;
}

const columns = {

  columns: [{
    title: '课程内容',
    dataIndex: 'course_name',
    key: 'course_name'
  }, {
    title: '上课时间',
    dataIndex: 'time',
    key: 'time'
  }, {
    title: '上课情况',
    dataIndex: 'enter_status',
    key: 'enter_status'

  }, {
    title: '作业提交情况',
    dataIndex: 'homework_status',
    key: 'homework_status',
    render: text => mark_render(text)
  }, {
    title: '被点评情况',
    dataIndex: 'review_status',
    key: 'review_status',
    render: text => mark_render(text)
  }, {
    title: '打卡情况',
    dataIndex: 'clockin_status',
    key: 'clockin_status',
    render: text => mark_render(text)
  }, {
    title: '满意度评分',
    dataIndex: 'satisfied_score',
    key: 'satisfied_score',
    render: text => color_render(text)
  }]
};

export default class ClassProfile extends Component {
  render() {
    const { state } = this.props;
    const { basic_info, list } = state.classInfo;
    const mid = state.params.mid;
    // console.log("state.classList111111",state)
    return (
      <div>
        <div>
              <span className="font">班级:{basic_info.name}</span><span className="font"> 班级ID：{mid}  </span>
              <span className="font">老师：{basic_info.real_teacher.name} ID：{basic_info.real_teacher.mid} 微信：{basic_info.real_teacher.wx_code}</span>
              <span className="font">负责员工：{basic_info.virtual_teacher.nick}ID：{basic_info.virtual_teacher.id} 微信：{basic_info.virtual_teacher.wx_code}</span>
            </div>
        <div> <Table
              columns={columns.columns}
              dataSource={list}
            />
            </div>
      </div>

    );
  }
}
