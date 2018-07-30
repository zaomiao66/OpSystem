import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import Header from '../components/Header/Header'
import TabBar from '../components/TabBar/TabBar'
import Tables from '../components/Tables/Tables'
import ButtonBox from '../components/ButtonBox/ButtonBox'


 class Op extends Component {
    render() {

        return (
            <div className="Op">
                <Header state={this.props}/>
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

export default connect(mapStateToProps)(Op);

