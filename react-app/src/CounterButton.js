import React from "react";

export default class CounterButton extends React.Component{
    render(){
        return <button onClick={this.props.childClick}>Click me</button>
    }
}