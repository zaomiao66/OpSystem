import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux';
import * as actionCreators from '../actions'
import './RightsManagement.css'
import { Button } from 'antd';
import PersonManagement from "../components/PersonManagement/PersonManagement";





class RightsManagement extends Component {

    componentWillMount() {

        const { Actions } = this.props;
        Actions.getTeachersLeft();

    }


    render() {
        return (
            <div className="RightsManagement">
                <div className="titleInRightManagement">点评权限</div>
                <div className="ReviewHomework">
                    <span className="ReviewHomework_left">点评作业：拥有个人点评页，可以为学生进行点评</span>
                    <span className="ReviewHomework_right">权限管理</span>
                </div>

                <div className="ReviewHomework">
                    <span className="ReviewHomework_left">代课老师：拥有审核点评老师点评内容的权限，包括撤回点评，自行点评</span>
                    <span className="ReviewHomework_right">权限管理</span>
                </div>

                <PersonManagement state={this.props} actions={this.props.Actions}/>
            </div>
        )
    }
}




function mapStateToProps(state, ownProps) {
    console.log("statestate",state);
    const { rightsManagementReducer } = state;
    const teachersInRight = rightsManagementReducer.teachersInRight;
    // const teachersInLeft = rightsManagementReducer.teachersInLeft;
    //     console.log("lklkjkj",rightsManagementReducer.teachersInLeft)
    // if(rightsManagementReducer.teachersInLeft.length!==0){
        const teachersInLeft =  rightsManagementReducer.teachersInLeft.map(t =>{
            return rightsManagementReducer.teachers[t]
        });

    // }

    const lessonsConstruction = rightsManagementReducer.classesTeacher.classesId.map(id =>{
        const  _classes  = rightsManagementReducer.classes[id];

      const teacher =  _classes.teachersId.map(idx =>{
            const _teachers = rightsManagementReducer.teachers[idx];
            console.log(_teachers);
            return{
                teacher:_teachers
            }

        });
      console.log(teacher)

        return {
            classes: {

                ..._classes,
                 teacher
            }
        }
    });
    console.log("lessonsConstruction",lessonsConstruction)
    return { ...rightsManagementReducer.classesTeacher,lessonsConstruction,teachersInRight,teachersInLeft };
}

function mapDispatchToProps(dispatch) {
    return{
        Actions:bindActionCreators(actionCreators,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RightsManagement);

