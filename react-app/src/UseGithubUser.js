import {useState} from "react"

export default function UseGithubUser(username){
    const [data,setData]=useState({})  
    const [loading,setLoading]=useState(false)  
    const [error,setError]=useState(null)  
    
    function fetchUser (){ 
        setLoading(true)

        fetch(`https://api.github.com/users/${username}`)
        .then(response=>{
            console.log('response status:',response.status)
            if(response.status!==200) throw new Error('Connection lost or invalid Username')
            return response.json()
        })
        .then(json=>{
            setData(json)
            console.log(json)
        })
        .catch(err=>{
            setError(err.message)    
        })
        .finally(setLoading(false))
    }

    return {data,loading,error,fetchUser}
}
