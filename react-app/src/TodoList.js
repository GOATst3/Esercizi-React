import {useState} from 'react'

export default function TodoList(){

    const [items,setItems]=useState(['take out the trash','take out the dog'])
    const [newTodo,setNewTodo]=useState('')

    function inputHandler(e){
        setNewTodo(e.target.value)
    }

    function onClickHandler(){
        setItems(list=>[...list,newTodo])
        setNewTodo('')
    }

    return( 
        <ul>
            {items.map((item,index)=><li key={index}>{item}</li>)}
            <input value={newTodo} onChange={inputHandler}></input>
            <button onClick={onClickHandler}>Add</button>
        </ul>
    )

}