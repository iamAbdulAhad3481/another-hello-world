import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Page from "./Page";
import Dashboard from "./Dashboard";
import NavBar from "./NavBar";

function Header() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/page" component={Page} />} />
        <Route path="/dashboard" render={props => <Dashboard {...props} />} />
      </Switch>
    </div>
  );
}
export default Header;
