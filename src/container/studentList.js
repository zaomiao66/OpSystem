import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux';
import * as actionCreators from '../actions'
import StudentProfile from "../components/StudentProfile/StudentProfile";





class StudentList extends Component {

    componentWillMount() {

        const { Actions } = this.props;
        console.log("props",this.props);
        Actions.getStudentList();

//axios 测试接口用
        // axios({
        //     method:'POST',
        //     url:'http://xly-wkop.xiaoniangao.cn/getSatisfiledList',
        //     data:{'mid':'330900002'},
        //     headers:{'Content-Type':'application/x-www-form-urlencoded'}
        // }).then(res =>{
        //     console.log("接口",res);
        //
        //     // console.log("data",this.state)
        // }).catch(err => {
        //     console.log("err",err);
        //
        // })


    }


    render() {
        const { Actions,studentList } = this.props
        console.log("statestate",this.props)
        return (
            <div className="Op">
                <StudentProfile state={studentList} actions={Actions}/>
            </div>
        )
    }
}




function mapStateToProps(state, ownProps) {

    // const { messageState, switchState,studentList,classInfo } = state;
    // return { messageState, switchState,studentList,classInfo };
    const { studentList } = state;
    return { studentList };
}

function mapDispatchToProps(dispatch) {
    return{
        Actions:bindActionCreators(actionCreators,dispatch)
        // dispatch
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(StudentList);
