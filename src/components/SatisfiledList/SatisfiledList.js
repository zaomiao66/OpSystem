import { Table,Icon,Popover } from 'antd'
import React,{ Component } from 'react'


function color_render(text) {

    if (text < 5) return <span className="redWord">{text}</span>;
    else return <span>{text}</span>;

}

export default class SatisfiledList extends Component{

    haddleReplyStatus = (id) => {
        const { actions } = this.props;
        actions.actions.changReplyStatus(id)
    };

    render(){

        console.log("satisfied组件内",this.props);
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
                // render: text => click_render(text)
                render: (text,record) => {
                    if(text === 0) {
                        return <div onClick={this.haddleReplyStatus.bind(this,record.class_info.id)}><Icon  type="mail"/><span>待回复</span></div>;
                    }
                    return <div><span>已回复</span></div>


                }
            }]};

        // rowKey = (record,i) => `${record.class_info && record.class_info.id}_${i}`
        const { satisfiedEntities } = this.props.state
        const { satisfied } = satisfiedEntities
        let newList = satisfied.result;
        if(satisfied){
            newList = satisfied.result.map(t=>{
                const satisfiled = satisfiedEntities.satisfiled[t];
                return {
                    ...satisfiled,
                    class_info: satisfiedEntities.classes[satisfiled.class_info],
                    teacher_info: satisfiedEntities.teachers[satisfiled.teacher_info]
                }
            });

        }
        return(
            <div>

                <Table
                    // rowKey={this.rowKey}
                    columns={columns.columns}
                    dataSource={newList}
                    bordered

                />

            </div>

        )
    }
}