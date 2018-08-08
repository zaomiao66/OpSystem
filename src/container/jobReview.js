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
        Actions.getHomeWorkHasReviewed(1,1);
        Actions.getAllHomeWork(0,0);
        Actions.getAllHomeWorkHasReviewed(0,1);
    }


    render() {
        // console.log(this.props)
        return (
            <div className="Op">
                <TabBar state={this.props} Actions={this.props.Actions}/>
            </div>
        )
    }
}




function mapStateToProps(state, ownProps) {
    // console.log("statestate",state.homeworkReducer)
    const { homeworkReducer} = state;
    const { homeworkEntities } = homeworkReducer;

    const myHomeworkNotReviewed = homeworkEntities.myHomeworkNotReviewed.map(id =>{
        const { comments,author } = homeworkEntities.homework[id];
        const _author = homeworkEntities.author[author];
        const _comments = comments.map(t =>homeworkEntities.comments[t] )
        return { ...homeworkEntities.homework[id],
            comments:_comments,
            author:_author };
    });
    const myHomeworkBeReviewed = homeworkEntities.myHomeworkBeReviewed.map(id =>{
        const { comments,author } = homeworkEntities.homework[id];
        const _author = homeworkEntities.author[author];
        const _comments = comments.map(t =>homeworkEntities.comments[t] )
        return { ...homeworkEntities.homework[id],
            comments:_comments,
            author:_author };
    });const allHomeworkNotReviewed = homeworkEntities.allHomeworkNotReviewed.map(id =>{
        const { comments,author } = homeworkEntities.homework[id];
        const _author = homeworkEntities.author[author];
        const _comments = comments.map(t =>homeworkEntities.comments[t] )
        return { ...homeworkEntities.homework[id],
            comments:_comments,
            author:_author };
    });const allHomeworkBeReviewed = homeworkEntities.allHomeworkBeReviewed.map(id =>{
        const { comments,author } = homeworkEntities.homework[id];
        const _author = homeworkEntities.author[author];
        const _comments = comments.map(t =>homeworkEntities.comments[t] )
        return { ...homeworkEntities.homework[id],
            comments:_comments,
            author:_author };
    });
        return{ myHomeworkNotReviewed,myHomeworkBeReviewed,allHomeworkNotReviewed,allHomeworkBeReviewed }
}

function mapDispatchToProps(dispatch) {
    return{
        Actions:bindActionCreators(actionCreators,dispatch)
        // dispatch
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(JobReview);