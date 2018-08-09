import React,{Component} from 'react';
import './actionSheet.css';
import PropTypes from 'prop-types';

export default class  ActionSheet extends Component{
    static defaultProps = {
        isActive: false,
        title: '',
        type: '',
        menus: [],
        onCancel: () => {},

    };

    static propTypes = {
        isActive: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
        menus: PropTypes.array.isRequired,
        onCancel: PropTypes.func.isRequired
    };

    getMaskClassName = () => {
        if (!this.props.isActive) {
            return 'mask hideMask';
        }
        return 'mask showMask';
    };

    getMenuClassName = () => {
        if (!this.props.isActive) {
            return 'menu';
        }
        return 'menu showMenu';
    };

    getAndroidMenuClassName = () => {
        if (!this.props.isActive) {
            return 'AndroidMenu';
        }
        return 'AndroidMenu showAndroidMenu';
    };

    handleMenuItemClick = idx => {
        const { menus, onCancel } = this.props;
        menus[idx].click && menus[idx].click(idx);

        onCancel();
    }

    render() {
        const { title, menus } = this.props;
        console.log(this.props)
        return (
            <div className="actionsheetCtn">
                <div className={this.getMaskClassName()} onClick={this.props.onCancel} />
                {  this.props.type === 'ios'
                    ?<div className={this.getMenuClassName()}>
                        {
                            !title.length
                                ? null
                                : <div className="title divider">{title}</div>
                        }

                        {
                            menus.map((item, idx) => (
                                <div
                                    className="btn divider"
                                    key={`actionSheet_${idx}`}
                                    onClick={() => this.handleMenuItemClick(idx)}
                                >
                                    {item.title}
                                </div>
                            ))
                        }
                        <div className="btn _cancel" onClick={this.props.onCancel}>取消</div>
                    </div>
                    : <div className={this.getAndroidMenuClassName()}>
                        {
                            menus.map((item, idx) => (
                                <div
                                    className="btn divider"
                                    key={`actionSheet_${idx}`}
                                    onClick={() => this.handleMenuItemClick(idx)}
                                >
                                    {item.title}
                                </div>
                            ))
                        }
                    </div>
                }
            </div>
        );
    }
}