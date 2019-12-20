import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        console.log('LifeCycle B Constructor')
    }
    static getDerivedStateFromProps(props){
        console.log('LifeCycle B getDerivedStateFromProps')
        return(
            null
        )
    }
    componentDidMount()
    {
        console.log('LifeCycle B componentDidMount')
        
    }

    render() {
        console.log('LifeCycle B render')

        return (
            <div>
                LifeCycleB 
                
            </div>
        )
    }
}

export default LifeCycleB
