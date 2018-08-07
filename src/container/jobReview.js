import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux';
import * as actionCreators from '../actions'
import ClassProfile from "../components/ClassProfile/ClassProfile";
import { List } from 'antd';
import TabBar from '../reviewComponents/TabBar'




class JobReview extends Component {

    componentWillMount() {
        const { Actions } = this.props;
        // console.log("props",this.props);
        Actions.getHomeWork(1,0);
    }


    render() {
        // console.log(this.props)
        return (
            <div className="Op">
                <TabBar state={this.props}/>
            </div>
        )
    }
}




function mapStateToProps(state, ownProps) {
    // console.log("statestate",state)
    const { homeworkReducer } = state;
    console.log('type',typeof (homeworkReducer.studentIds))
    const homework = homeworkReducer.studentIds.map(id =>{
        const { comments,author } = homeworkReducer.homework[id];
        const _author = homeworkReducer.author[author];
        const _comments = comments.map(t =>homeworkReducer.comments[t] )
        return { ...homeworkReducer.homework[id],
            comments:_comments,
            author:_author };
    });
    console.log("homework",homework);
    return  {homework} ;
}

function mapDispatchToProps(dispatch) {
    return{
        Actions:bindActionCreators(actionCreators,dispatch)
        // dispatch
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(JobReview);