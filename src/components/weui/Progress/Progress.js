import React,{Component} from 'react';
import './Progress.css'

export default class Progress extends Component{
    static defaultProps = {
        value: 0,
        classNameInProgress:'greenBar'
    };




        render(){
            console.log("classNameInProgress",this.props.classNameInProgress);
           // console.log(doucument.getElementById(width).style.width)
            return(
                <div className="progressBar">
                    <div className="bar">
                        <div id="width" className={this.props.classNameInProgress}></div>
                    </div>
                    <div className="userButton">

                    </div>
                </div>
            )

        }

}