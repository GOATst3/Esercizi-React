import react, { createRef } from 'react';

export default class UncontrolledLogin extends react.Component {
    ref = createRef()

    inputHandler = (event) => {
        event.preventDefault()

        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked

        console.log(
            {
                username,
                password,
                remember
            }
        )

    }

    render() {

        return (
            <div>
                <form ref={this.ref} onSubmit={this.inputHandler}>
                    <input type="text" name="username" placeholder='Username'/>
                    <input name="password" type="password" placeholder='Password'/>
                    <br/>
                    <input name="remember" type="checkbox" /> Remember Me
                    <button type="submit" style={{marginLeft:'25px'}}>Login</button>
                    <br/>
                    <button type='reset' >Reset</button>
                </form>
            </div>
        )
    }

}