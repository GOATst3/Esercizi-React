import React,{useState} from 'react'
export default function Counter (){
    const [count, setCount] = useState(0)
    console.log(count)

    const clickHandler = ()=>setCount(c=>c+1)

    return (
        <>
            <h1>{count}</h1>    
            <button onClick={clickHandler}>Click Me!</button>
        </>
    )
}