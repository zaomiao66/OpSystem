import React,{ Component } from 'react'
import './TabBar.css'
import { Tabs } from 'antd';
import Tables from '../Tables/Tables'
import ButtonBox from '../ButtonBox/ButtonBox'
import { connect } from 'react-redux'
const TabPane = Tabs.TabPane;
function callback(key) {
    console.log(key);
}

export default class TabBar extends Component{



    render(){
        const { state } = this.props;
        return(

            <div >
                <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane className="tab_1" tab="课程信息" key="1">
                    <div>
                        <ButtonBox state={state}/>
                        <Tables state={ state }/>
                    </div>
                </TabPane>
                <TabPane tab="满意度反馈" key="2"></TabPane>
            </Tabs>
            </div>
        )

    }

}