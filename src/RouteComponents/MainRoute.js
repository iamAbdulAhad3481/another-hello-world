import React from 'react'
import NavBar from './NavBar'
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import NoMatch from './NoMatch'
import Topics from './Topics'

function MainRoute() {

  return (
    <div>
      <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route  path="/topics" component={Topics}/>
        <Route component={NoMatch} />
      </Switch>
      </Router>
 
    </div>
  )
}

export default MainRoute
