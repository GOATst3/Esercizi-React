import React from "react";

export default class Colors extends React.Component{
    render(){
        const colors = this.props.colors.map(item=><li key={item.id}>{item.color}</li>)
        return(
            <ul>
                {colors}
            </ul>
        )
    }
}