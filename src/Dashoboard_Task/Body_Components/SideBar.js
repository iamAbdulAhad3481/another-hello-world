import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SideBar extends Component {
  render() {
    const { match } = this.props
    // console.log(match.path)
    return (
      
        <nav class="navbar text-left  col-md-3 border" >
          <ul class="navbar-nav" style={{ height: 400 }}>
            <li class="nav-item">
              <Link class="nav-link" to="/dashboard/link1">Link 1</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={`${match.url}/Link2`}>Link 2</Link>
            </li>

            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" to="/dashboard/dropdown"  id="navbardrop" data-toggle="dropdown">
                Dropdown link
               </Link>
              <div class="dropdown-menu">
                <Link class="dropdown-item" to="/dashboard/dropdown/a">A</Link>
                <Link class="dropdown-item" to="/dashboard/dropdown/b">B</Link>
                <Link class="dropdown-item" to="/dashboard/dropdown/c">C</Link>
              </div>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={`${match.url}/Link3`}>Link 3</Link>
            </li>
          </ul>
        </nav>
      

    )
  }
}

export default SideBar
