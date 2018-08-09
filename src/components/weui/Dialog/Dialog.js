import React,{Component} from 'react';
import './Dialog.css';
import PropTypes from 'prop-types';


export default class Dialog extends Component{
    static defaultProps = {
        isActive: false,
        title: '',
        type: '',
       content:'',
        onCancel: () => {},
        renderBody:'',
        okText:'',
        cancelText:'',
        onOk:() => {},

    };
    static propTypes = {
        isActive: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
        type:PropTypes.string.isRequired,
        content:PropTypes.string.isRequired,
        okText:PropTypes.string.isRequired,
        cancelText:PropTypes.string.isRequired,
        onOk: PropTypes.func.isRequired,
        onCancel: PropTypes.func.isRequired,
    };
    getMaskClassName = () => {
        if (!this.props.isActive) {
            return 'mask hideMask';
        }
        return 'mask showMask';
    };

    getWindowClassName = () => {
        if (!this.props.isActive) {
            return 'Dialog_window';
        }
        return 'Dialog_window showDialog_window';
    };



    render(){
        return(
            <div className="Dialog">
                <div className={this.getMaskClassName()}  />
                { this.props.type === 'ios'
                ?<div className={this.getWindowClassName()}>
                    <div className="titleInDialog">{this.props.title}</div>
                    <div className="content_text">{this.props.content}</div>
                    <div className="operate divider">
                        {
                            !this.props.okText.length
                                ? <span className="subOperate dividerRight" onClick={this.props.onCancel}>取消</span>
                                : <span className="subOperate dividerRight" onClick={this.props.onCancel}>{this.props.cancelText}</span>
                        }
                        {
                            !this.props.okText.length
                                ? <span className="mainOperate" onClick={this.props.onOk}>确认</span>
                                : <span className="mainOperate" onClick={this.props.onOk}>{this.props.okText}</span>
                        }

                    </div>

                </div>
                    :<div className={this.getWindowClassName()}>
                        {/*<div className="titleInDialog">{this.props.title}</div>*/}
                        <div className="content_textAndroid">{this.props.content}</div>
                        <div className="operateAndroid">

                            {
                                !this.props.okText.length
                                    ? <span className="mainOperateAndroid" onClick={this.props.onOk}>确认</span>
                                    : <span className="mainOperateAndroid" onClick={this.props.onOk}>{this.props.okText}</span>
                            }
                            {
                            !this.props.okText.length
                                ? <span className="subOperateAndroid" onClick={this.props.onCancel}>取消</span>
                                : <span className="subOperateAndroid" onClick={this.props.onCancel}>{this.props.cancelText}</span>
                        }

                        </div>

                    </div>
                }
            </div>
        )
    }
}

