import {useState} from 'react'

export function useForm(){

    const [data,setData]=useState({
        username:'',
        password:''
    })

    const inputHandler = (e) =>{
        setData((data)=>({
            ...data,
            [e.target.name] : e.target.value
        }))
    }
        
    const getData = () => {
        console.log(data)
    }

    return {data,inputHandler,getData}
}