import React from "react";
import { Welcome } from "./Welcome";
export class App extends React.Component{
    render(){
        return (
        <React.StrictMode>
            <Welcome/>
        </React.StrictMode> 
        )
    }
}