import React,{ Component } from 'react'
import { List,Button } from 'antd'
import { getTimeS } from "../utility/utility";


export default class HomeworkReview extends Component{


    render(){
        const{homework ,Actions} = this.props



        function color_word(item) {
            // console.log("item",Actions)
            if(item.status === "reject") return(<div style={{color:'red'}}> (消息被退回，退回原因：{item.reason})</div>)
            if(item.status === "unrevised") return(<div  style={{color:'red'}}> <Button  onClick={()=>{Actions.returnComment(item.id)}} size="small" type="danger">退回</Button></div>)
        }
        //onClick={Actions.returnComment(item.id)}
        
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
                        <div>{getTimeS(item.time)}</div>
                        <div>{item.content}</div>
                        {color_word(item)}
                        </div>
                        </List.Item>)}
                />

            </div>
        )
    }

}


