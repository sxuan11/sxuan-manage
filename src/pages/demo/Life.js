import React from 'react'
import Child from "./Child"
import './index.less'

export default class Life extends React.Component{

    constructor(props){
        super(props);
        this.state={
            count:0,
            name:'sxuan'
        }
        // this.handleAdd= this.handleAyarn dd.bind(this);
    }


    handleAdd=()=>{
        this.setState({count:this.state.count+1})
    }

    handleClick(){
        this.setState({count:this.state.count-1})
    }

    render(){
        return(
            <div className="content">
                <p>react 生命周期</p>
                <button onClick={this.handleAdd}>展示</button>
                <button onClick={this.handleClick.bind(this)}>展示1</button>
                <p>{this.state.count}</p>
                <Child names={this.state.name}/>
            </div>
        )
    }
}