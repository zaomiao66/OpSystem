import React,{ Component } from 'react'
import './TabBar.css'
import { Tabs } from 'antd';
import Tables from '../Tables/Tables'
import ButtonBox from '../ButtonBox/ButtonBox'
import { connect } from 'react-redux'
import SatisfiledList from "../SatisfiledList/SatisfiledList";
const TabPane = Tabs.TabPane;
function callback(key) {
    console.log(key);
}

export default class TabBar extends Component{



    render(){
        const { state } = this.props;
        console.log('here',this.props.state.router.goBack)
        return(

            <div >
                <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane className="tab_1" tab="课程信息" key="1">
                    <div>
                        <ButtonBox back={ state.router.goBack } />
                        <Tables state={ state } actions={this.props}/>
                    </div>
                </TabPane>
                <TabPane tab="满意度反馈" key="2">
                    <div>
                        <ButtonBox back={ state.router.goBack } />
                        <SatisfiledList state={ state } actions={this.props}/>
                    </div>
                </TabPane>
            </Tabs>
            </div>
        )

    }

}