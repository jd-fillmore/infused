import React, { useState } from "react"
import { Link } from "gatsby"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
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
      <div className="fixed-top">
        <Navbar expand="lg">
          <NavbarBrand>
            <Link to="/">infused</Link>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Why Us?
                </DropdownToggle>
                <DropdownMenu right className="animate slideIn">
                  <DropdownItem>About Us</DropdownItem>
                  <DropdownItem>How We Work</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  What We Do
                </DropdownToggle>
                <DropdownMenu right className="animate slideIn">
                  <DropdownItem>Modern Websites</DropdownItem>
                  <DropdownItem>Local SEO</DropdownItem>
                  <DropdownItem>Digital Strategy</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link to="/work" className="nav-link">
                  Our Work
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/get-estimate" className="nav-link">
                  Get An Estimate
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  )
}

export default Example
