import React from "react"

export default class Container extends React.Component{
    render(){
        return(
            <>
                <div className='container'>
                    <h1>
                        {this.props.title}   
                    </h1>
                    {this.props.children}
                </div>
            </>
        )
    }
}
