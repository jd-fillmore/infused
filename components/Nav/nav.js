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
      <Navbar id="nav" expand="lg" className="fixed-top">
        <NavbarBrand href="/">
          <Link to="/" className="logo">
            infused
          </Link>
        </NavbarBrand>
        <NavbarToggler className="custom-toggler" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Why Us?
              </DropdownToggle>
              <DropdownMenu right className="animate slideIn">
                <Link to="/about">
                  <DropdownItem>About Us</DropdownItem>
                </Link>
                <Link to="/how-we-work">
                  <DropdownItem>How We Work</DropdownItem>
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                What We Do
              </DropdownToggle>
              <DropdownMenu right className="animate slideIn">
                <Link to="/seo">
                  <DropdownItem>SEO</DropdownItem>
                </Link>
                <Link to="/websites">
                  <DropdownItem>Website Design</DropdownItem>
                </Link>
                <Link to="/e-commerce">
                  <DropdownItem>E-Commerce</DropdownItem>
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <Link to="/work" className="nav-link">
                Our Work
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/pricing" className="nav-link">
                Pricing
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/posts" className="nav-link">
                Blog
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/get-started" className="nav-link btn">
                Get A Free Quote
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Example
