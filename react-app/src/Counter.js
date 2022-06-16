import React from 'react'
import CounterDisplay from './CounterDisplay';

export default class Counter extends React.Component{
    constructor(props){
        super(props)
        
        this.state={
        count:this.props.init 
        }

    }
    intervalID = () =>{setInterval(() => {
                this.setState((state)=>{
                    return {
                        count:  state.count+(this.props.increment)
                    }
                })
        }, this.props.interval);}

    componentDidUpdate(){
        if(this.state.count > this.props.init*10) this.setState({count:  this.props.init})
        console.log('update')
        
    }

    componentDidMount(){
        console.log('sto montando')
        this.intervalID()
    }

    componentWillUnmount(){
        console.log('sto smontando')
        clearInterval(this.intervalID)
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