import {useEffect, useState } from "react"
export default function GithunUser(props){
    const [data,setData]=useState({})

     function fetchUser (){ 
        fetch(`https://api.github.com/users/${props.username}`)
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


    if (data.login){
        return(
            <div style={{textAlign:'center', borderBottom:' 2px solid black'}}>
                <h1>{data.login}</h1>
                <p>Click <a href={data.html_url}>Here</a> to go to the GitHub account</p>
                <img src={data.avatar_url} height={'100px'} width={'100px'}/>
            </div>
        )
    }
    else return <h1 style={{textAlign:'center', borderBottom:' 2px solid black'}}>{data.message}</h1>
}