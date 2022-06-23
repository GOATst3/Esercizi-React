import React from "react";

export default class TodoList extends React.Component{
    state={
        items:['take out the trash','take out the dog'],
        newTodo:''
    }
    onClickHandler=()=>{
        this.setState(state=>state.items.push(state.newTodo))
    }
    inputHandler=(event)=>{
        this.setState({newTodo:event.target.value})
    }

    render(){
        return(
            <ul>
                {this.state.items.map(item=><li>{item}</li>)}
                <input onChange={this.inputHandler}></input>
                <button onClick={this.onClickHandler}>Add</button>
            </ul>
        )
    }
}