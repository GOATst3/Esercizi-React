import React from "react";

export default class Colors extends React.Component{
    render(){
        const colors = this.props.colors.map(item=><li>{item}</li>)
        return(
            <ul>
                {colors}
            </ul>
        )
    }
}