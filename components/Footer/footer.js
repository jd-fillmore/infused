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
            <Col lg="4">
              <h3>About</h3>
              <p>
                Infused Agency is a Niagara web design, SEO company and digital
                marketing agency. We help local and non-local businesses build
                their credibility online, as well as help bring in more sales.
              </p>
            </Col>
            <Col lg="2">
              <h3>Pages</h3>
              <ul>
                {pages.map(page => (
                  <li>
                    <Link to={page.link}>{page.name}</Link>
                  </li>
                ))}
              </ul>
            </Col>
            <Col lg="2">
              <h3>Services</h3>
              <ul>
                {services.map(service => (
                  <li>
                    <Link to={service.link}>{service.name}</Link>
                  </li>
                ))}
              </ul>
            </Col>
            <Col lg="2">
              <h3>Contact</h3>
              <ul>
                <li>
                  <Link to="/get-started">Get Started</Link>
                </li>
              </ul>
              <a href="tel:9059333115">(905) 933-3115</a>
              <p>73 Alexandra Blvd, St. Catharines, ON L2P 1K2</p>
            </Col>
          </Row>
          <Row>
            <Col lg="8">
              <h3>Areas Served</h3>
              <p>
                Crystal Beach, Dunnville, Caistorville, Fonthill, Fort Erie,
                Grimsby, Jordan, Lincoln, Niagara Falls, Niagara-on-the-Lake,
                Pelham, Port Colborne, Port Dalhousie, Smithville, St.
                Catharines, Thorold, Vineland, Virgil, Wainfleet, Welland, West
                Lincoln.
              </p>
            </Col>
            <Col lg="4">
              <h3>Hours</h3>
              <ul>
                <li>Monday - 9a.m.-6p.m.</li>
                <li>Tuesday - 9a.m.-6p.m.</li>
                <li>Wednesday - 9a.m.-6p.m.</li>
                <li>Thursday - 9a.m.-6p.m.</li>
                <li>Friday - 9a.m.-6p.m.</li>
                <li>Saturday - Closed</li>
                <li>Sunday - Closed</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Footer
