import {useEffect, useState } from "react"
import UseGithubUser from "./UseGithubUser"
export default function GithunUser(props){
    const {data}=UseGithubUser(props.username)

    if (data?.login){
        return(
            <div style={{textAlign:'center'}}>
                    <h1>{data.login}</h1>
                    <p>Click <a href={data.html_url}>Here</a> to go to the GitHub account</p>
                <img src={data.avatar_url}/>
            </div>
        )
    }
    else return <h1>{data.message}</h1>
}