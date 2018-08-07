import React,{ Component } from 'react'
import { List } from 'antd'
import ImageCarousel from './Carousel'
import HomeworkInfo from "./HomeworkInfo";
import HomeworkReview from "./HomeworkReview";
import './JobReviewList.css'

const data = [1,2,3,4,5];

export default class JobReviewList extends Component{

    render(){
        const { homework } = this.props
        console.log("homework",homework)
        return(
            <div>
                <List
                    bordered
                    dataSource={homework}
                    renderItem={item => (<List.Item>

                        <div className="JobReviewList">
                            <div className="JobReviewList_left">
                            <div className="JobReviewList_left_top"> <ImageCarousel homework={item}/> </div>
                            <div className="JobReviewList_left_mid"> <HomeworkInfo homework = { item }/> </div>

                            </div>
                            <div className="JobReviewList_right"> <HomeworkReview homework = { item }/></div>

                        </div>


                    </List.Item>)}
                />



            </div>
        )
    }

}


