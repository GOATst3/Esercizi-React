import {useEffect, useState } from "react"
import UseGithubUser from "./UseGithubUser"
export default function GithunUser(props){
    const {data,loading,error,fetchUser}=UseGithubUser(props.username)
    
       useEffect(()=>fetchUser(),[])
        

    useEffect(()=>{
        if(error){
            console.error('There was an error: ',error)
        }
    }
    ,[error])


    return(
        <div style={{textAlign:'center'}}>
            {loading && <h1>Loading</h1>}
            {error && <h1>{error}</h1>}
            {data.login &&
                <div>
                    <h1>{data.login}</h1>
                    <p>Click <a href={data.html_url}>Here</a> to go to the GitHub account</p>
                    <img src={data.avatar_url}/>
                </div>
            }
        </div>
        )
        



}