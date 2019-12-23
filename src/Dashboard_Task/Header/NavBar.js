import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class NavBar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand">Navbar</a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link class="nav-link" to="/">Home </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/page">Page</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/dashboard">Dashboard</Link>
              </li>

            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar
