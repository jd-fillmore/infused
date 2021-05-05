import React, { useState } from "react"
import { Link } from "gatsby"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"
import "../Nav/nav.scss"

const Example = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar id="nav" expand="lg">
        <NavbarBrand href="/">
          <Link to="/" className="logo">
            infused
          </Link>
        </NavbarBrand>
        <NavbarToggler className="custom-toggler" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/services" className="nav-link">
                Services
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/work" className="nav-link">
                Portfolio
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/posts" className="nav-link">
                Blog
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/get-started" className="nav-link btn">
                Free Consultation
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Example
