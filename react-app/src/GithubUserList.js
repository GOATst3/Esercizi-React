import {useEffect, useState } from "react"
import GithubUser from './GithubUser'
export default function GithubUserList(props){
    const [users,setUsers]=useState(['GOATst3'])
    const [newUser,setNewUser]=useState('')

    function OnChangeHandler (e) {
        setNewUser(e.target.value)
    }
    function Add () {
        setUsers(oldarray=>[...oldarray,newUser])
        setNewUser('')
        console.log(users)
    }

    return(
        <>
            {users.map(item=><GithubUser username={item}/>)}
            {console.log(Array.isArray(users))}
            <input onChange={OnChangeHandler} value={newUser}></input>
            <button onClick={Add}>add</button>
        </>
    )
}
