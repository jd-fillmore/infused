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
              <Link to="/" title="Niagara Web Design" className="nav-link">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/work" className="nav-link">
                Work
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Services
              </DropdownToggle>
              <DropdownMenu right>
                <Link to="/seo-niagara/">
                  <DropdownItem>SEO</DropdownItem>
                </Link>
                <Link to="/web-design/">
                  <DropdownItem>Web Design &amp; Development</DropdownItem>
                </Link>
                <Link to="/wordpress-developer-niagara/">
                  <DropdownItem>WordPress Development</DropdownItem>
                </Link>
                <Link to="/ecommerce-web-design-niagara/">
                  <DropdownItem>E-Commerce Development</DropdownItem>
                </Link>
                <Link to="/digital-marketing-niagara/">
                  <DropdownItem>Digital Marketing</DropdownItem>
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <Link to="/posts" className="nav-link">
                Blog
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/get-started" className="nav-link btn">
                Free Quote
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Example
