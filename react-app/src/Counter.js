import React from 'react'
import CounterDisplay from './CounterDisplay';

export default class Counter extends React.Component{
    constructor(props){
        super(props)
        
        this.state={
        count:this.props.init 
        }

        setInterval(() => {
            if(this.state.count < this.props.init*10)
                this.setState((state)=>{
                    return {
                        count:  state.count+(this.props.increment)
                    }
                })
            else this.setState({count:  this.props.init})
        }, this.props.interval);
    }

    render(){
        return <CounterDisplay count={this.state.count}/>
    }
        
}

Counter.defaultProps = {
    init: 1,
    interval: 1000,
    increment: 1
}