import React, { useState } from "react"
import Link from "next/link"
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

const Example = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar className="fixed-top" id="nav" expand="lg">
        <NavbarBrand href="/">
          <Link href="/" className="logo">
            infused
          </Link>
        </NavbarBrand>
        <NavbarToggler className="custom-toggler" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link href="/" title="Niagara Web Design" className="nav-link">
                Home
              </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Services
              </DropdownToggle>
              <DropdownMenu right>
                <Link href="/niagara-seo-company/">
                  <DropdownItem>SEO</DropdownItem>
                </Link>
                <Link href="/web-design/">
                  <DropdownItem>Web Design &amp; Development</DropdownItem>
                </Link>
                <Link href="/wordpress-developer-niagara/">
                  <DropdownItem>WordPress Development</DropdownItem>
                </Link>
                <Link href="/ecommerce-web-design-niagara/">
                  <DropdownItem>E-Commerce Development</DropdownItem>
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <Link href="/work" className="nav-link">
                Work
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/about" className="nav-link">
                About
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/posts" className="nav-link">
                Blog
              </Link>
            </NavItem>
            <NavItem>
              <a
                className="nav-link btn"
                href="https://calendly.com/infused-agency/project-discovery/"
                target="_blank"
                rel="noreferrer"
              >
                Get Free Quote
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  class="absolute left-1/2 top-1/2 translate-centered group-hover:ml-1 transition-250"
                  height="20px"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                </svg>
              </a>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Example
