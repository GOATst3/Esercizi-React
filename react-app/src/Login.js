import React from "react";

export default class Login extends React.Component{
    state={
        username:'',
        password:'',
        remember:false
    }

    handleChanges=(event)=>{/* 
        if(event.target.name==='username') this.setState({username:event.target.value})
        else if(event.target.name==='password')this.setState({password:event.target.value})
        else if(event.target.name==='remember')this.setState({remember:event.target.checked}) */
        this.setState({
            [event.target.name]:event.target.type==='checkbox' ? event.target.checked : event.target.value
        })
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    showState=()=>{
        console.log(this.state)
        console.log(this.state.username && this.state.password)
    }

    render(){
        return (
            <>
                <input 
                    type={'text'}
                    name={'username'} 
                    placeholder={'Username'}
                    value={this.state.username} 
                    onChange={this.handleChanges} 
                />
                <input
                    type={'password'}
                    name={'password'}
                    placeholder={'Password'}
                    value={this.state.password}
                    onChange={this.handleChanges}
                />
                <br/>
                <input
                    type={'checkbox'}
                    name={'remember'}
                    value={this.state.remember}
                    disabled={this.state.username.trim()==='' || this.state.password.trim()===''?true:false}
                    onChange={this.handleChanges}
                />
                Remember Me
            </>
        )
    }
}