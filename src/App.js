import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import EventCalender from './Components/EventCalender';
import MainRoute from './RouteComponents/MainRoute';
import LifeCycleA from './Components/LifeCycleA';
import Main from './Axios Requests/Main';
import EditUserModal from './Axios Requests/EditUserModal';
import { Provider } from 'react-redux'
import store from './Redux/Store'
import UserContainer from './Redux_Components/UserContainer';
import ClassHeader from './Dashboard_Task/Header/Header';
import FunctionalHeader from './Dashboard_Functional_Task/Header/Header'
function App() {
  

  return (
    
    <div className="App">
      {/* <MainRoute/> */}
      {/* <EventCalender/> */}
      {/* <LifeCycleA/> */}
      {/* <Main/> */}
      
      {/* <Provider store={store}>
        <UserContainer/>
        <PostForm/>
      </Provider> */}
      <Router><ClassHeader/></Router>
      {/* <Router><FunctionalHeader/></Router> */}
    </div>
  );
}

export default App;
