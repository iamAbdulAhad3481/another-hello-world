import React from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown, Nav } from 'react-bootstrap';

function SideBar({ match }) {
  return (
    <>
      <Nav defaultActiveKey="1" className="flex-column text-left  pt-4 mt-5 ">
        <Nav.Item><Link className="nav-link d-block" to={`${match.url}/link1`}  >Link 1</Link></Nav.Item>
        <Nav.Item><Link className="nav-link d-block" to={`${match.url}/link2`} > Link 2 </Link></Nav.Item>
        <Nav.Item><Link className="nav-link d-block" to={`${match.url}/link3`}>Link 3</Link></Nav.Item>
        <NavDropdown title="Dropdown" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1"><Link class=" dropdown-item" to={`${match.url}/dropdown/a`}>A</Link></NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2"> <Link class=" dropdown-item" to={`${match.url}/dropdown/b`}>B</Link></NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3"><Link class=" dropdown-item" to={`${match.url}/dropdown/c`}>C</Link></NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </>
  )
}
export default SideBar;
