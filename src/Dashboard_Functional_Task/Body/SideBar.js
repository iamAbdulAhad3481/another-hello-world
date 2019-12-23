import React from 'react'
import { NavDropdown, Nav, eventKey } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function SideBar() {
  return (
    <>
      <Nav defaultActiveKey="1" className="flex-column text-left  pt-4 mt-5 ">
        <Nav.Item><Link className="nav-link d-block" to="/dashboard/link1"  >Link 1</Link></Nav.Item>
        <Nav.Item><Link className="nav-link d-block" to="/dashboard/link2"> Link 2 </Link></Nav.Item>
        <Nav.Item><Link className="nav-link d-block" to="/dashboard/link3">Link 3</Link></Nav.Item>
        <NavDropdown title="Dropdown" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1"><Link class=" dropdown-item" to="/dashboard/dropdown/a">A</Link></NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2"> <Link class=" dropdown-item" to="/dashboard/dropdown/b">B</Link></NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3"><Link class=" dropdown-item" to="/dashboard/dropdown/c">C</Link></NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </>
  )
}
export default SideBar
