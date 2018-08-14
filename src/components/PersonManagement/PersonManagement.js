import React,{ Component } from 'react'
import './PersonManagement.css'
import { Icon,Button,Input,Tree } from  'antd'



export default class PersonManagement extends Component {

    onSelect = (selectedKeys, info) => {
      if(selectedKeys>10000)   this.props.actions.getTeacherRight(selectedKeys);
        console.log('selected', selectedKeys, info);
    };

    searchTeacherNameLeft = (value) => {
        this.props.actions.searchTeacherNameLeft(value);
        console.log(value)
    };

    searchTeacherNameRight = (value)=>{
        this.props.actions.searchTeacherNameRight(value);
        console.log(value)
    }


    getTree =(arr,root) =>{
        const TreeNode = Tree.TreeNode;

       return  root.map((item)=>{
            return (<TreeNode title={arr[item].name} key={arr[item].id}>
                {
                    arr[item].children? this.getTree(arr,arr[item].children)
                 :null
                }
            </TreeNode>)})

    };




    render(){
        const Search = Input.Search;
        // const TreeNode = Tree.TreeNode;
        const { state } = this.props;
        const { _lesson } = this.props.state;
        console.log(this.props,"111");
        // const tree = this.getTree(_lesson,[101])


        return(
            <div style={state.isShow?{}:{display:'none'}} className="PersonManagement">
                <div className="ReviewHomework_1">
                    <span className="ReviewHomework_left">点评作业：拥有个人点评页，可以为学生进行点评</span>
                    <Icon onClick={this.props.actions.closeRightManagement} type="close-square" style={{fontSize:20,color:'red',marginRight:100}} />
                </div>
                <div className="bodyInPersonManagement">

                    <div className="teachersBeAdded">
                        <div className="teachersBeAddedTop">
                            <Button onClick={this.props.actions.deleteTeachersLeft} type="danger">删除</Button>
                            <Search
                                placeholder="input search text"
                                onSearch={value => this.searchTeacherNameLeft(value)}
                                enterButton
                            />
                        </div>
                        {
                            state.teachersInLeft.length === 0?
                                <div className="teachersBeAddedBottom">

                                </div>
                                :<div>
                                    {
                                        !state.leftIsSearching?
                                        <div className="teachersBeAddedBottom">
                                            {
                                                state.teachersInLeft.map((item,idx) =>{
                                                    return  <span key={idx} style={item.isSelectLeft?{ backgroundColor: '#66b2ff' } : {}} onClick={() =>{this.props.actions.selectTeachersLeft(item.mid)}} className="teacherButton">{item.name}mid:{item.mid} </span>
                                                })
                                            }
                                </div>:<div className="teachersBeAddedBottom">
                                                {
                                                    state.leftSearch.map((item,idx) =>{
                                                        return  <span key={idx} style={item.isSelectLeft?{ backgroundColor: '#66b2ff' } : {}} onClick={() =>{this.props.actions.selectTeachersLeft(item.mid)}} className="teacherButton">{item.name}mid:{item.mid} </span>
                                                    })
                                                }
                                            </div>
                                    }
                                </div>
                        }
                    </div>

                    <div className="teachersTree">
                        <Tree
                            showLine
                            defaultExpandedKeys={['101']}
                            onSelect={this.onSelect}
                        >
                            {this.getTree(_lesson,[101])}
                        </Tree>
                    </div>

                    <div className="teachersNotAdd">
                    <div className="teachersNotAddTop">
                        <Search
                            placeholder="input search text"
                            onSearch={value => this.searchTeacherNameRight(value)}
                            enterButton
                        />
                    </div>

                        {
                            state.teachersInRight.length === 0?
                                <div className="teachersNotAddBottom">

                                </div>
                                :<div>{
                                    !state.rightIsSearching ?
                                        <div className="teachersNotAddBottom">
                                            {
                                                state.teachersInRight.map((item, idx) => {
                                                    return <span key={idx}
                                                                 style={item.isSelect ? {backgroundColor: '#66b2ff'} : {}}
                                                                 onClick={() => {
                                                                     this.props.actions.selectTeachersRight(item.mid)
                                                                 }}
                                                                 className="teacherButton">{item.name}mid:{item.mid} </span>
                                                })
                                            }
                                        </div>:<div className="teachersBeAddedBottom">
                                            {
                                                state.rightSearch.map((item,idx) =>{
                                                    return  <span key={idx} style={item.isSelectLeft?{ backgroundColor: '#66b2ff' } : {}} onClick={() =>{this.props.actions.selectTeachersLeft(item.mid)}} className="teacherButton">{item.name}mid:{item.mid} </span>
                                                })
                                            }
                                        </div>
                                }
                                </div>
                        }

                    </div>


                </div>
                <div><span style={{marginLeft:1000}}  onClick={() =>{this.props.actions.addTeachersLeft( )}} className="teacherButton">添加 </span></div>
            </div>
        )
    }
}

