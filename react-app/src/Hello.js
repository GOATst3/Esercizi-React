import React from "react"
import { Message } from "./Message"
export class Hello extends React.Component{
    render(){
        return (
            <>
            <h1>Hello, world</h1>
            <Message></Message>
            </>
        )
    }
}