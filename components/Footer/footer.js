import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"

import "../Footer/footer.scss"

const pages = [
  {
    name: "About Us",
    link: "/about",
  },
  {
    name: "How We Work",
    link: "/how-we-work",
  },
  {
    name: "Our Work",
    link: "/work",
  },
]

const services = [
  {
    name: "Modern Websites",
    link: "/websites",
  },
  {
    name: "Local SEO",
    link: "/seo",
  },
  {
    name: "Digital Marketing Consulting",
    link: "/digital-strategy",
  },
]

const Footer = () => {
  return (
    <>
      <section className="footer">
        <Container>
          <Row>
            <Col lg="3">
              <h4>About</h4>
              <p>
                Infused is a Niagara web design, SEO company and digital
                marketing agency. We help local and non-local businesses build
                their credibility online, as well as help bring in more sales.
              </p>
            </Col>
            <Col lg="3">
              <h4>Pages</h4>
              <ul>
                {pages.map(page => (
                  <li>
                    <Link to={page.link}>{page.name}</Link>
                  </li>
                ))}
              </ul>
            </Col>
            <Col lg="3">
              <h4>Services</h4>
              <ul>
                {services.map(service => (
                  <li>
                    <Link to={service.link}>{service.name}</Link>
                  </li>
                ))}
              </ul>
            </Col>
            <Col lg="3">
              <h4>Contact</h4>
              <ul>
                <li>
                  <Link to="/get-started">Get Started</Link>
                </li>
              </ul>
              <p>73 Alexandra Blvd, St. Catharines, ON L2P 1K2</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Footer