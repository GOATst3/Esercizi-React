import {useState, useEffect } from "react"

export default function UseGithubUser(username){
    const [data,setData]=useState({})  
    
    function fetchUser (){ 
        fetch(`https://api.github.com/users/${username}`)
        .then(response=>{
            console.log('response status:',response.status)
            return response.json()
        })
        .then(json=>{
            console.log(json)
            setData(json)
        })
        .catch(err=> console.error(err))
    }

    useEffect(()=>{
        fetchUser()
    },[])

    return {data}
}
