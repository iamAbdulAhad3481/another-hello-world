import React from 'react';
import SideBar from '../Body/SideBar';
import MainBody from '../Body/MainBody';

function Dashboard(props) {
  return (
    <div className="container-fluid  " >
      <div className="row d-flex flex-wrap " >
        <div className="col-md-3 bg-light" ><SideBar {...props} /></div>
        <div className="col-md-9 "> <MainBody {...props} /></div>
      </div>
    </div>
  )
}
export default Dashboard;

