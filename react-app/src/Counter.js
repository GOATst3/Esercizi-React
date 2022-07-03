import {useState,useEffect} from 'react'
export default function Counter (props){
    const [count, setCount] = useState(0)

    function interval(){
        setInterval(() => {
        setCount((c)=>c+1)
        }, 1000);
    }


    useEffect(()=>{
        interval()
        return ()=> {
            console.log('unmounting...')
            clearInterval(interval)
            console.log('unmounted')
        }
    },[])
    useEffect(()=>props.onCounterChange(count),[count])

    return (
        <>
            <h1>{count}</h1>
        </>
    )
}