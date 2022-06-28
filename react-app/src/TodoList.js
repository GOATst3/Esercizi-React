import React from "react";

export default class TodoList extends React.Component{
    state={
        items:['take out the trash','take out the dog'],
        newTodo:''
    }
    onClickHandler=()=>{
        this.setState(state=>{
            if (state.newTodo.trim()!=='') state.items.push(state.newTodo)
        })
        this.setState({newTodo:''})
    }
    inputHandler=(event)=>{
        this.setState({newTodo:event.target.value})
    }
    reset=()=>{
        this.setState({items:[]})
    }
    
    removeTask = (index) => {
        this.setState(state=>state.items.splice(index,1))
    }

    render(){
        return(
            <ul>
                {this.props.children(this.state.items,this.removeTask)}
                <input value={this.state.newTodo} onChange={this.inputHandler}></input>
                <button onClick={this.onClickHandler}>Add</button>
                <button onClick={this.reset}>Reset</button>
            </ul>
        )
    }
}