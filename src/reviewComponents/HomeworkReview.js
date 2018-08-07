import React,{ Component } from 'react'
import { List } from 'antd'

export default class HomeworkReview extends Component{


    render(){
        const{homework} = this.props
        let _data = [];
        for(let i=0;i<homework.comments.length;i++){
            _data.push(homework.comments[i].content)
        }
        
        function color_word(item) {
            if(item.status === "reject") return(<div style={{color:'red'}}> (消息被退回，退回原因：{item.reason})</div>)
            if(item.status === "unrevised") return(<div style={{color:'red'}}> 退回</div>)
        }
        
         return(
            <div>
                <List

                    bordered
                     // dataSource={_data}
                    // dataSource={homework.comments.map(comment =>{[homework.comments[comment].content]})}
                    dataSource={homework.comments}
                    renderItem={item => (<List.Item>
                        <div className="colom">
                        <div>{item.nick}:</div>
                        <div>{item.content}</div>
                        {color_word(item)}
                        </div>
                        </List.Item>)}
                />

            </div>
        )
    }

}


