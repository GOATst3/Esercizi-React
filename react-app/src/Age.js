import React, { Component } from "react";
export default class Age extends Component{
    render(){
        return(
            <>
            {
            this.props.age > 17?
            <p>Your age is {this.props.age}</p>:
            <p>You are very young!</p>}
            </>
        )
    }
}