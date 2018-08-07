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
                <TabBar state={this.props}/>
            </div>
        )
    }
}




function mapStateToProps(state, ownProps) {
    // console.log("statestate",state)
    const { homeworkReducer,homeworkHasReviewed,allHomeworkReducer,allHomeworkHasReviewed } = state;
    const homework = homeworkReducer.studentIds.map(id =>{
        const { comments,author } = homeworkReducer.homework[id];
        const _author = homeworkReducer.author[author];
        const _comments = comments.map(t =>homeworkReducer.comments[t] )
        return { ...homeworkReducer.homework[id],
            comments:_comments,
            author:_author };
    });
    const homeworkReviewed = homeworkHasReviewed.studentIds.map(id =>{
        const { comments,author } = homeworkHasReviewed.homework[id];
        const _author = homeworkHasReviewed.author[author];
        const _comments = comments.map(t =>homeworkHasReviewed.comments[t] )
        return { ...homeworkHasReviewed.homework[id],
            comments:_comments,
            author:_author };
    });
    const allHomework = allHomeworkReducer.studentIds.map(id =>{
        const { comments,author } = allHomeworkReducer.homework[id];
        const _author = allHomeworkReducer.author[author];
        const _comments = comments.map(t =>allHomeworkReducer.comments[t] )
        return { ...allHomeworkReducer.homework[id],
            comments:_comments,
            author:_author };
    });
    const allHomeworkReviewed = allHomeworkHasReviewed.studentIds.map(id =>{
        const { comments,author } = allHomeworkHasReviewed.homework[id];
        const _author = allHomeworkHasReviewed.author[author];
        const _comments = comments.map(t =>allHomeworkHasReviewed.comments[t] )
        return { ...allHomeworkHasReviewed.homework[id],
            comments:_comments,
            author:_author };
    });
    // console.log("homework",homework);
    return  {homework,homeworkReviewed,allHomework,allHomeworkReviewed} ;
}

function mapDispatchToProps(dispatch) {
    return{
        Actions:bindActionCreators(actionCreators,dispatch)
        // dispatch
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(JobReview);