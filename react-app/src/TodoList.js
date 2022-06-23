import React from "react";

export default class TodoList extends React.Component{
    state={
        items:['take out the trash','take out the dog'],
        newTodo:''
    }
    onClickHandler=()=>{
        this.setState(state=>state.items.push(state.newTodo))
        this.setState({newTodo:''})
    }
    inputHandler=(event)=>{
        this.setState({newTodo:event.target.value})
    }
    reset=()=>{
        this.setState({items:[]})
    }

    render(){
        return(
            <ul>
                {this.state.items.map(item=><li>{item}</li>)}
                <input value={this.state.newTodo} onChange={this.inputHandler}></input>
                <button onClick={this.onClickHandler}>Add</button>
                <button onClick={this.reset}>Reset</button>
            </ul>
        )
    }
}