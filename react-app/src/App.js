import React, { Component } from "react";
import {Hello} from './Hello.js'
export class App extends Component{
    render(){
        return(
            <div>
                <Hello/>
                <Hello/>
            </div>
        )
    }
}