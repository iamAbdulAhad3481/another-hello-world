import React, { Component } from 'react'
import HighOrderComponent from './HighOrderComponent'

 class ButtonCounter extends Component {
  render() {
    const { count, incrementCount } = this.props
    return (
      <div>
        <button onClick={incrementCount}>Click {count} times </button>
      </div>
    )
  }
}

export default HighOrderComponent(ButtonCounter) 
