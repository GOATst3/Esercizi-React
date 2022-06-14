import React from 'react'
import CounterDisplay from './CounterDisplay';

export default class Counter extends React.Component{
    constructor(props){
        super(props)
        
        this.state={
        count:this.props.init ?? 0
        }

        setInterval(() => {
            this.setState((state)=>{return {count:  state.count+(this.props.increment ?? 1)}})
        }, this.props.interval ?? 1000);
    }

    render(){
        return <CounterDisplay count={this.state.count}/>
    }
        
    }
