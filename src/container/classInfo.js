import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux';
import * as actionCreators from '../actions'
import ClassProfile from "../components/ClassProfile/ClassProfile";




class ClassInfo extends Component {

    componentWillMount() {

        const { Actions } = this.props;
        console.log("props",this.props);
        // api.fetchUsersInfo(dispatch);
        // api.fetchLessonInfo(dispatch);
        // Actions.fetchUsersInfo('111');
        // Actions.fetchLessonInfo('111');
        // Actions.getStudentList();
        Actions.getClassInfo('111');



    }


    render() {
        return (
            <div className="Op">
                <ClassProfile state={this.props}/>
            </div>
        )
    }
}




function mapStateToProps(state, ownProps) {
    // console.log("statestate",state)
    const { studentList,classInfo } = state;
    return { studentList,classInfo };
}

function mapDispatchToProps(dispatch) {
    return{
        Actions:bindActionCreators(actionCreators,dispatch)
        // dispatch
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ClassInfo);

