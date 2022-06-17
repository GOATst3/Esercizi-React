import React from "react";
import CounterButton from "./CounterButton";

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
            <CounterButton childClick={this.increment}>Click me</CounterButton>
            </>
        )
    }
}