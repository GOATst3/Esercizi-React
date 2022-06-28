import React from "react";
import { LanguageContext } from "./LanguageContext";
export default class DisplayLanguage extends React.Component{
    render(){
        return(
            <LanguageContext.Consumer>
                {language=>{
                return<h1>{language}</h1>
                }}
            </LanguageContext.Consumer>
        )
    }
}