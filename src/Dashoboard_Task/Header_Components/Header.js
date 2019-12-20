import React, { Component } from 'react'
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Sub_Header_Components/Home'
import Page from './Sub_Header_Components/Page'
import Dashboard from './Sub_Header_Components/Dashboard'
import NavBar from './Sub_Header_Components/NavBar'
class Header extends Component {

  render() {
    return (
      <>
        <NavBar />

        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route path="/page" render={(props) => <Page {...props} />} />
          <Route path="/dashboard" render={(props) => <Dashboard {...props} />} />
        </Switch>

      </>

    )
  }
}

export default Header
