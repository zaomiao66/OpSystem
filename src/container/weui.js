import React, { Component } from 'react'

import ActionSheet from '../components/weui/Actionsheet/actionSheet'
import Dialog from '../components/weui/Dialog/Dialog'
import Progress from "../components/weui/Progress/Progress";

export default class Weui extends Component{
    state = {
        isActionSheetActive: false,
        title: '',
        menus: [],
        type: '',
//这部分是对话框的
        isActionDialogActive:false,
        dialogTitle:'',
        dialogType:'',
        dialogContent:'',
        dialogOkText:'',
        dialogCancelText:'',
//这部分是进度条的
        value:0,
        classNameInProgress:'greenBar',
        showCancelInProgress:true,
    };

    handleShowActionSheet = () => {
        this.setState({
            isActionSheetActive: true,
            title: '这是一个标题',
            type: 'ios',
            menus: [{
                title: '示例菜单1',
                click: () => console.log('示例菜单1')
            }, {
                title: '示例菜单2',
                click: () => console.log('示例菜单2')
            }]
        });
    };

    handleShowActionSheet2 = () => {
        this.setState({
            isActionSheetActive: true,
            title: '这是一个标题',
            type: 'android',
            menus: [{
                title: '示例菜单1',
                click: () => console.log('示例菜单1')
            }, {
                title: '示例菜单2',
                click: () => console.log('示例菜单2')
            }]
        });
    };



    handleHideActionSheet = () => {
        this.setState({
            isActionSheetActive: false
        });
    };

//这部分是对话框的
    handleOkActionDialog = () => {
        console.log("嘿嘿我就知道你知道的")
        this.setState({
            isActionDialogActive:false
        });
    };

    handleCancelActionDialog = () => {
        console.log("哼！那你现在知道了")
        this.setState({
            isActionDialogActive:false
        });
    };

    handleShowActionDialog = () => {
        this.setState({
            isActionDialogActive:true,
            dialogTitle:'这是一个对话框',
            dialogType:'ios',
            dialogContent:'你知道我最喜欢什么吗??没错,就是肥宅快乐水！！',
            dialogOkText:'知道',
            dialogCancelText:'不知道',
        });
    };

    handleShowActionAndroidDialog = () => {
        this.setState({
            isActionDialogActive:true,
            dialogTitle:'这是一个对话框',
            dialogType:'android',
            dialogContent:'你知道我最喜欢什么吗??没错,就是肥宅快乐水！！',
            dialogOkText:'知道',
            dialogCancelText:'不知道',
        });
    };

    getClassName = () => {

        this.setState({
            classNameInProgress:'greenBar showGreenBar'
        })
        // return 'greenBar showGreenBar';

    };

    _getClassName = () => {

        this.setState({
            classNameInProgress:'greenBar'
        })
        // return 'greenBar showGreenBar';

    };

    render() {
        return (
            <div>
                <div onClick={this.handleShowActionSheet}>ios actionsheet</div>
                <div onClick={this.handleShowActionSheet2}>android actionsheet</div>
                <div onClick={this.handleShowActionDialog}>Dialog</div>
                <div onClick={this.handleShowActionAndroidDialog}>android dialog</div>


                <ActionSheet
                    isActive={this.state.isActionSheetActive}
                    title={this.state.title}
                    menus={this.state.menus}
                    type={this.state.type}
                    onCancel={this.handleHideActionSheet}
                />
                <Dialog
                    isActive={this.state.isActionDialogActive}
                    title={this.state.dialogTitle}
                    type={this.state.dialogType}
                    content={this.state.dialogContent}
                    onCancel={this.handleCancelActionDialog}
                    okText={this.state.dialogOkText}
                    cancelText={this.state.dialogCancelText}
                    onOk={this.handleOkActionDialog}
                />
                <Progress
                    classNameInProgress={this.state.classNameInProgress}
                />
                <span className="upLoad" onClick={this.getClassName}>上传</span>
                <span className="cancel" onClick={this._getClassName}>取消</span>
            </div>
        );
    }
}