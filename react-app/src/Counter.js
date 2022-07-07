import { useCounter } from "./UseCounter";
export default function Counter(){
    const {counter,increment,decrement,reset}=useCounter()
    return(
        <>
        <h1>{counter}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        </>
    )
}