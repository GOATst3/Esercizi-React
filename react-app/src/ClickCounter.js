import React from "react";
import ClickTracker from "./ClickTracker";
import CounterButton from "./CounterButton";

export default class ClickCounter extends React.Component{
    state={
        count : 0,
        lastPress:''
    }

    increment = () =>{
        this.setState((state)=>{
            return{count:state.count+1,}
        })
    }

    track = (event) =>{
        console.log(event)
        this.setState({lastPress:event.target.name})
    }

    render(){
        return(
            <>
            <h1>{this.state.count}</h1>
            <CounterButton childClick={this.increment}>Click me</CounterButton>
            <h1>{this.state.lastPress && 'The last button clicked is the '}{this.state.lastPress}</h1>
            <ClickTracker childClick={this.track}></ClickTracker>
            </>
        )
    }
}