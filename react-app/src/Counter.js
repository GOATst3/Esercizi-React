import {useState,useEffect} from 'react'
export default function Counter (props){
    const [count, setCount] = useState(0)
    useEffect(()=>props.onCounterChange(count),[count])
    
    const clickHandler = () =>setCount(c=>c+1)

    return (
        <>
            <h1>{count}</h1>    
            <button onClick={clickHandler}>Click Me!</button>
        </>
    )
}