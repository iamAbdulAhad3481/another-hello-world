import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class MainBody extends Component {
  render() {
    const { match } = this.props
    return (
      <div  >
        <Switch>
          <Route exact path="/dashboard/dropdown/a" render={() =>
            <div class="jumbotron bg-white text-dark text-justify" >
              <h1 class="display-6">Child A rendering</h1>
              <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr class="my-2" />
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
              <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
              </p>
            </div>} />
          <Route exact path="/dashboard/dropdown/b" render={() =>
            <div class="jumbotron bg-white text-dark text-justify" >
              <h1 class="display-6">Child B rendering</h1>
              <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr class="my-2" />
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
              <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
              </p>
            </div>} />
          <Route exact path="/dashboard/dropdown/c" render={() =>
            <div class="jumbotron bg-white text-dark text-justify" >
              <h1 class="display-6">Child C rendering</h1>
              <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr class="my-2" />
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
              <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
              </p>
            </div>} />
          <Route path="/dashboard/link1" render={() =>
            <div class="jumbotron bg-white text-dark text-justify" >
              <h1 class="display-6">Rendering Link 1</h1>
              <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr class="my-2" />
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
              <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
              </p>
            </div>} />
          <Route path="/dashboard/link2" render={() =>
            <div class="jumbotron bg-white text-dark text-justify" >
              <h1 class="display-6">Rendering Link 2</h1>
              <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr class="my-2" />
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
              <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
              </p>
            </div>} />
          <Route path="/dashboard/link3" render={() =>
            <div class="jumbotron bg-white text-dark text-justify" >
              <h1 class="display-6">Rendering Link 3</h1>
              <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr class="my-2" />
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
              <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
              </p>
            </div>} />
          <Route exact path="/dashboard" render={() =>
            <div class="jumbotron bg-white text-dark text-justify" >
              <h1 class="display-6">Welcome to Dashboard</h1>
              <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr class="my-2" />
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
              <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
              </p>
            </div>} />
        </Switch>
      </div>
    )
  }
}

export default MainBody

