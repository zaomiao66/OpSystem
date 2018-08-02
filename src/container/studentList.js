import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux';
import * as actionCreators from '../actions'
import Header from '../components/Header/Header'
import TabBar from '../components/TabBar/TabBar'
// import Tables from '../components/Tables/Tables'
// import ButtonBox from '../components/ButtonBox/ButtonBox'
import * as api from '../api';
import {userMID} from "../const/ActionTypes";
import * as ActionTypes from "../const/ActionTypes";
import StudentProfile from "../components/StudentProfile/StudentProfile";
import axios from 'axios'
import ClassProfile from "../components/ClassProfile/ClassProfile";




class StudentList extends Component {

    componentWillMount() {

        const { Actions } = this.props;
        console.log("props",this.props);
        // api.fetchUsersInfo(dispatch);
        // api.fetchLessonInfo(dispatch);
        Actions.fetchUsersInfo('111');
        Actions.fetchLessonInfo('111');
        Actions.getStudentList();
        Actions.getClassInfo('111');

        axios({
            method:'POST',
            url:'http://xly-wkop.xiaoniangao.cn/getSatisfiledList',
            data:{'mid':'330900002'},
            headers:{'Content-Type':'application/x-www-form-urlencoded'}
        }).then(res =>{
            console.log("接口",res);

            // console.log("data",this.state)
        }).catch(err => {
            console.log("err",err);

        })


    }


    render() {
        const { Actions,state } = this.props
        return (
            <div className="Op">
                {/*<Header actions={Actions} state={this.props}/>*/}
                {/*<TabBar state={this.props}/>*/}
                {/*<ButtonBox/>*/}
                {/*<Tables/>*/}
                <StudentProfile state={this.props} actions={Actions}/>
                {/*<ClassProfile state={this.props}/>*/}
            </div>
        )
    }
}




function mapStateToProps(state, ownProps) {
    // console.log("statestate",state)
    const { messageState, switchState,studentList,classInfo } = state;
    return { messageState, switchState,studentList,classInfo };
}

function mapDispatchToProps(dispatch) {
    return{
        Actions:bindActionCreators(actionCreators,dispatch)
        // dispatch
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(StudentList);
