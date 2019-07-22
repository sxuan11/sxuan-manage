import React from 'react'

class child extends React.Component {
    constructor(props){
        super(props);
        this.state={
            count:0,
        }
    }

    componentWillMount(){
        console.log("WillMount")
    }

    componentDidMount(){
        console.log("DidMount")
    }

    componentWillReceiveProps(props){
        console.log("WillReceiveProps"+props)
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate")
        return true;
    }
    componentWillUpdate(){
        console.log("WillUpdate")
    }
    componentDidUpdate(){
        console.log("DidUpdate")
    }
    render() { 
        return ( 
            <div>
                <p>{this.props.names}</p>
            </div>
         );
    }
}
 
export default child;