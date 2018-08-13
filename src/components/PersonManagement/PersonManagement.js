import React,{ Component } from 'react'
import './PersonManagement.css'
import { Icon,Button,Input,Tree } from  'antd'



export default class PersonManagement extends Component{

    onSelect = (selectedKeys, info) => {
        if(selectedKeys < 3)this.props.actions.getTeacherRight(selectedKeys);
        // console.log('selected', selectedKeys, info);
    };

    searchTeacherNameLeft = (value) =>{
        this.props.actions.searchTeacherNameLeft(value);
    };

    render(){
        const Search = Input.Search;
        const TreeNode = Tree.TreeNode;
        const { state } = this.props;
        // console.log(this.props,"111");



        return(
            <div className="PersonManagement">
                <div className="ReviewHomework_1">
                    <span className="ReviewHomework_left">点评作业：拥有个人点评页，可以为学生进行点评</span>
                    <Icon  type="close-square" style={{fontSize:20,color:'red',marginRight:100}} />
                </div>
                <div className="bodyInPersonManagement">

                    <div className="teachersBeAdded">
                        <div className="teachersBeAddedTop">
                            <Button type="danger">删除</Button>
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
                                :<div className="teachersBeAddedBottom">
                                    {
                                        state.teachersInLeft.map((item,idx) =>{
                                            return  <span key={idx} onClick={() =>{this.props.actions.deleteTeachersLeft(item.mid)}} className="teacherButton">{item.name}mid:{item.mid} </span>
                                        })
                                    }
                                </div>

                        }
                    </div>

                    <div className="teachersTree">
                        <Tree
                            showLine
                            defaultExpandedKeys={['0-0-0']}
                            onSelect={this.onSelect}
                        >
                            <TreeNode title={state.name} key="3">
                                <TreeNode title={state.lessonsConstruction[0].classes.name} key="0"/>

                                <TreeNode title={state.lessonsConstruction[1].classes.name} key="1"/>

                                <TreeNode title={state.lessonsConstruction[2].classes.name} key="2"/>


                            </TreeNode>
                        </Tree>
                    </div>

                    <div className="teachersNotAdd">
                    <div className="teachersNotAddTop">
                        <Search
                            placeholder="input search text"
                            onSearch={value => console.log(value)}
                            enterButton
                        />
                    </div>

                        {
                            state.teachersInRight.length === 0?
                                <div className="teachersNotAddBottom">

                                </div>
                                :<div className="teachersNotAddBottom">
                                    {
                                        state.teachersInRight.map((item,idx) =>{
                                          return  <span key={idx} onClick={() =>{this.props.actions.addTeachersLeft(item.mid)}} className="teacherButton">{item.name}mid:{item.mid} </span>
                                        })
                                    }
                                </div>

                        }

                    </div>


                </div>
                <div></div>
            </div>
        )
    }
}

