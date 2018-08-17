import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import Header from '../components/Header/Header';
import TabBar from '../components/TabBar/TabBar';
// import satisfiedEntities from "../reducers/satisfiedEntities";
// import lessonInfoEntities from "../reducers/lessonInfoEntities";
// import Tables from '../components/Tables/Tables'
// import ButtonBox from '../components/ButtonBox/ButtonBox'


class Op extends Component {
  componentWillMount() {
    const { Actions } = this.props;
    const { mid } = this.props.params; // 15号修改
    // console.log("props",this.props);
    Actions.fetchUsersInfo(mid);
    Actions.fetchLessonInfo(mid);
    Actions.getSatisfiledList(mid);
  }


  render() {
    const { Actions } = this.props;
    return (
      <div className="Op">
        <Header actions={Actions} state={this.props} />
        <TabBar state={this.props} actions={Actions} />
      </div>
    );
  }
}


function mapStateToProps(state) {
  // console.log("statestate",state)
  const { userInfo, lessonInfoEntities, satisfiedEntities } = state;
  const currentLessonsList = lessonInfoEntities.result.currentLessonIds.map(id => {
    const { teacherInfo, classInfo } = lessonInfoEntities.lessonInfo[id];
    const teacher = lessonInfoEntities.teachers[teacherInfo];
    const _class = lessonInfoEntities.classes[classInfo];
    return {
      ...lessonInfoEntities.lessonInfo[id],
      teacherInfo: teacher,
      classInfo: _class
    };
  });
  const historyLessonsList = lessonInfoEntities.result.historyLessonIds.map(id => {
    const { teacherInfo, classInfo } = lessonInfoEntities.lessonInfo[id];
    const teacher = lessonInfoEntities.teachers[teacherInfo];
    const _class = lessonInfoEntities.classes[classInfo];
    return {
      ...lessonInfoEntities.lessonInfo[id],
      teacherInfo: teacher,
      classInfo: _class
    };
  });

  return {
    userInfo, currentLessonsList, historyLessonsList, satisfiedEntities
  };
}

function mapDispatchToProps(dispatch) {
  return {
    Actions: bindActionCreators(actionCreators, dispatch)
    // dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Op);

