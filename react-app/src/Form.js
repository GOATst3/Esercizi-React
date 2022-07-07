import React from "react";
import { useForm } from "./UseForm";
export default function Form() {
    const { data, inputHandler, getData} = useForm() 

    return (
        <>
            <form id="Form">
                <input type='text' name='username' onChange={inputHandler}  value={data.username}></input>
                <input type='password' name='password' onChange={inputHandler} value={data.password}></input>
            </form>
            <button onClick={getData}>Current Value </button>
        </>
    )
}