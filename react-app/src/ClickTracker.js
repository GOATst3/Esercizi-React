import React from "react";

export default class ClickTracker extends React.Component{
    render(){
        return (
            <>
            <button name="First" onClick={this.props.childClick}>Button 1</button>
            <button name="Second" onClick={this.props.childClick}>Button 3</button>
            <button name="Third" onClick={this.props.childClick}>Button 2</button>
            </>
        )
    }
}