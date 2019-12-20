import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class MainBody extends Component {

    render() {
        const { match } = this.props

        return (
            <div className="col-md-9 border">

                <Switch>

                    <Route exact path="/dashboard/dropdown/a" render={() => <h2>Child a rendering</h2>} />
                    <Route exact path="/dashboard/dropdown/b" render={() => <h2>Child b rendering</h2>} />
                    <Route exact path="/dashboard/dropdown/c" render={() => <h2>Child c rendering</h2>} />

                    <Route path="/dashboard/link1" render={() => <h2>Link 1 rendering</h2>} />
                    <Route path="/dashboard/link2" render={() => <h2>Link 2 rendering</h2>} />
                    <Route path="/dashboard/link3" render={() => <h2>Link 3 rendering</h2>} />

                    <Route exact path="/dashboard" render={() => <h2>Welcome to dashboard</h2>} />
                </Switch>


            </div>
        )
    }
}

export default MainBody

