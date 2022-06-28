import {useState} from 'react'

export default function Login(){
    const [ data, setData]= useState({
        username:'',
        password:'',
        remember:false,
        login:false
    })
    
    const handleChanges=(e)=>{
        const { name, type, value, checked } = e.target
        setData((data)=>{
            return{
                ...data,
                [name]:type === 'checkbox' ? checked : value
            }
        })
    }

    const onLogin=(e)=>{
        e.preventDefault();
        setData(data=>{
            return{
                ...data,
                login:true
            }
        })
        console.log(data)
    }
    return (
        <>
            <input 
                type={'text'}
                name={'username'} 
                placeholder={'Username'}
                value={data.username} 
                onChange={handleChanges} 
            />
            <input
                type={'password'}
                name={'password'}
                placeholder={'Password'}
                value={data.password}
                onChange={handleChanges}
            />
            <br/>
            <input
                type={'checkbox'}
                name={'remember'}
                value={data.remember}
                disabled={data.username==='' || data.password===''?true:false}
                onChange={handleChanges}
            />
            Remember Me
            <button 
                type={"submit"}
                style={{marginLeft:'25px'}} 
                onClick={onLogin}
                disabled={data.username==='' || data.password===''?true:false}
                >
                    Login
            </button>

        </>
    )
}