import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import Page from './Page'
import Dashboard from './Dashboard'
import NavBar from './NavBar'
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
