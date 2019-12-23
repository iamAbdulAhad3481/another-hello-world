import React, { Component } from 'react'
import SideBar from '../Body_Components/SideBar'
import MainBody from '../Body_Components/MainBody'

class Dashboard extends Component {

  render() {
    return (
      <>
      <div className="container-fluid  " >
        <div className="row d-flex flex-wrap " >
          <div className="col-md-3 bg-light" ><SideBar {...this.props} /></div>
          <div className="col-md-9 "> <MainBody {...this.props} /></div>
        </div>
      </div>
      
      </>
    )
  }
}

export default Dashboard
