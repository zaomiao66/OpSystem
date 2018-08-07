import React,{ Component } from 'react'
import './TabBar.css'
import { Tabs,Input } from 'antd';
import { connect } from 'react-redux';
import  JobReviewList from './JobReviewList'
import  axios  from 'axios'

const TabPane = Tabs.TabPane;
function callback(key) {
    console.log(key);
}

const Search = Input.Search;

export default class TabBar extends Component{




    render(){
        const { state } = this.props;
        console.log("state",this.props)
        return(

            <div >
                <div className="box_right">
                    <Search
                        placeholder="input search text"
                        // onSearch={value => actions.midSearch(value)}
                        style={{ width: 200 }}
                    />
                </div>

                <Tabs defaultActiveKey="1" onChange={callback} type="card">
                <TabPane  tab="我的未点评" key="1">
                    <div>
                        <JobReviewList homework = {state.homework} />
                    </div>
                </TabPane>
                <TabPane tab="我的点评历史" key="2">
                    <div>
                        <JobReviewList homework = {state.homeworkReviewed} />
                    </div>
                </TabPane>
                    <TabPane  tab="全部未点评" key="3">
                        <div>
                            <JobReviewList homework = {state.allHomework} />
                        </div>
                    </TabPane>
                    <TabPane  tab="全部已点评" key="4">
                        <div>
                            <JobReviewList homework = {state.allHomeworkReviewed} />
                        </div>
                    </TabPane>
            </Tabs>
            </div>
        )

    }

}