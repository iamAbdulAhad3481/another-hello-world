import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Text from '../../Dashboard_Task/Body/Text';

function MainBody({ match }) {
  return (
    <div>
      <Switch>
        <Route exact path={`${match.path}/dropdown/a`} render={(props) => <Text {...props} title="Child A rendering" />} />
        <Route exact path={`${match.path}/dropdown/b`} render={(props) => <Text {...props} title="Child B rendering" />} />
        <Route exact path={`${match.path}/dropdown/c`} render={(props) => <Text {...props} title="Child C rendering" />} />

        <Route path={`${match.path}/link1`} render={(props) => <Text {...props} title="Link 1 rendering" />} />
        <Route path={`${match.path}/link2`} render={(props) => <Text {...props} title="Link 2 rendering" />} />
        <Route path={`${match.path}/link3`} render={(props) => <Text {...props} title="Link 3 rendering" />} />

        <Route exact path={`${match.path}`} render={(props) => <Text {...props} title="Welcome to DashBoard" />} />
      </Switch>
    </div>
  )
}
export default MainBody;

