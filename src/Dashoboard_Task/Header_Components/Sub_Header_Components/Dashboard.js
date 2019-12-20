import React, { Component } from 'react'
import SideBar from '../../Body_Components/SideBar'
import MainBody from '../../Body_Components/MainBody'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

class Dashboard extends Component {

  render() {
    return (
    
        <div className="container-fluid row">
     
            <SideBar {...this.props} />
            <MainBody {...this.props} />
     


        </div>
    

    )
  }
}

export default Dashboard
