import React from "react";

export default class ClickCounter extends React.Component{
    state={count : 0}

    increment = () =>{
        this.setState((state)=>{
            return{count:state.count+1,}
        })
    }

    render(){
        return(
            <>
            <h1>{this.state.count}</h1>
            <button onClick={this.increment}>Click me</button>
            </>
        )
    }
}