import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux';
import * as actionCreators from '../actions'
import Header from '../components/Header/Header'
import TabBar from '../components/TabBar/TabBar'
// import Tables from '../components/Tables/Tables'
// import ButtonBox from '../components/ButtonBox/ButtonBox'
import * as api from '../api';
import axios from 'axios'
import {userMID} from "../const/ActionTypes";
import * as ActionTypes from "../const/ActionTypes";

 class Op extends Component {

     componentWillMount() {

         const { dispatch } = this.props;
         console.log("props",this.props)
         // Actions.fetchGithubUser(inputVal, dispatch);
         api.fetchUsersInfo(dispatch);
         api.fetchLessonInfo(dispatch);



     }


    render() {
        const { actions,state } = this.props
        return (
            <div className="Op">
                <Header actions={actions} state={this.props}/>
                <TabBar state={this.props}/>
                {/*<ButtonBox/>*/}
                {/*<Tables/>*/}
            </div>
        )
    }
}




function mapStateToProps(state, ownProps) {
    const { messageState, switchState } = state;
    return { messageState, switchState };
}

function mapDispatchToProps(dispatch) {
    return{
            // actions:bindActionCreators(actionCreators,dispatch)
        dispatch
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Op);

