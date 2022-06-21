import React from "react";
import Welcome from "./Welcome";

export default class InteractiveWelcome extends React.Component{
    state={
        name:''
    }

    handleNameChange=(event)=>{
        this.setState({name:event.target.value})
    }

    render(){
        return (
            <>
            <input type={'text'} value={this.state.name} onChange={this.handleNameChange} />
            {this.state.name&&<Welcome name={this.state.name} />}
            </>
        )
    }
}