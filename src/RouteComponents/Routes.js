import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import NoMatch from "./NoMatch";
import Topics from "./Topics";

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/topics" component={Topics} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
}

export default Routes;
