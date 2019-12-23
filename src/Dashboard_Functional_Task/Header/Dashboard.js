import React from 'react'
import MainBody from "../Body/MainBody"
import SideBar from '../Body/SideBar'
function Dashboard(props) {
  return (
    <>
      <div className="container-fluid  " >
        <div className="row d-flex flex-wrap " >
          <div className="col-md-3 bg-light" ><SideBar {...props} /></div>
          <div className="col-md-9 "> <MainBody {...props} /></div>
        </div>
      </div>
    </>
  )
}
export default Dashboard



