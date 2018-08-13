import React,{Component} from 'react';
import './Progress.css'

export default class Progress extends Component{
    static defaultProps = {
        value: 15,
        classNameInProgress:'greenBar',
        showCancelInProgress:true,
        onCancel:() => {}
    };




        render(){
            console.log("classNameInProgress",this.props);
           // console.log(doucument.getElementById(width).style.width)
            return(
                <div className="progressBar">
                    <div className="bar">
                        <div  className="greenBar" style={{width:this.props.value}}></div>
                    </div>
                    <div>现在进度是{(this.props.value/3.75).toFixed(2)}%</div>
                    <div className="userButton">
                        <span className="upLoad" onClick={this.props.getProgressValue}>上传</span>

                        {this.props.showCancelInProgress?
                        <span className="cancel" onClick={this.props.onCancel}>取消</span>
                            :null
                        }

                    </div>



                </div>
            )

        }

}